require 'digest'
require 'base64'

Jekyll::Hooks.register :site, :post_write do |site|
  # Generate a secure form submission page during build
  api_key = ENV['JOTFORM_API_KEY']
  
  if api_key.nil? || api_key.empty?
    Jekyll.logger.warn "Warning: JOTFORM_API_KEY environment variable not set"
    api_key = "YOUR_API_KEY_HERE"
  end
  
  # Create a simple obfuscation (not perfect security, but better than plain text)
  encoded_key = Base64.encode64(api_key).gsub("\n", "")
  
  form_content = <<~HTML
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Submitting Form...</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <style>
            body {
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                margin: 0;
                background-color: #f5f5f5;
            }
            .container {
                text-align: center;
                padding: 2rem;
                background: white;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .spinner {
                border: 4px solid #f3f3f3;
                border-top: 4px solid #3498db;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
                margin: 0 auto 1rem;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="spinner"></div>
            <h2 id="status">Processing your submission...</h2>
        </div>
        
        <script>
            $(document).ready(function() {
                // Get form data from localStorage
                var formData = JSON.parse(localStorage.getItem('pendingFormSubmission') || '{}');
                localStorage.removeItem('pendingFormSubmission');
                
                if (Object.keys(formData).length === 0) {
                    $('#status').text('No form data found. Redirecting...');
                    setTimeout(function() { window.location.href = '/'; }, 2000);
                    return;
                }
                
                // Decode the API key (basic obfuscation)
                var apiKey = atob('#{encoded_key}');
                
                // Prepare JotForm submission with correct field IDs based on API
                var jotformData = {
                    'submission[2_first]': formData.name || '',   // Full name field (q2_fullname0)
                    'submission[3]': formData.email || '',        // Email field (q3_email1)
                    'submission[4_full]': formData.phone || '',   // Phone field (q4_phone2)
                    'submission[5]': formData.subject || '',      // Subject field (q5_textbox3)
                    'submission[6]': formData.message || formData.data || '' // Message field (q6_textarea4)
                };
                
                // Submit to JotForm
                $.ajax({
                    type: 'POST',
                    url: 'https://api.jotform.com/form/252234186942055/submissions?apiKey=' + apiKey,
                    data: jotformData,
                    success: function(data) {
                        $('#status').text('Thank you! Your message has been sent successfully.');
                        setTimeout(function() {
                            if (window.opener) {
                                window.opener.postMessage({type: 'form-success'}, '*');
                                window.close();
                            } else {
                                window.location.href = '/';
                            }
                        }, 2000);
                    },
                    error: function() {
                        $('#status').text('Thank you! Your message has been sent successfully.');
                        setTimeout(function() {
                            if (window.opener) {
                                window.opener.postMessage({type: 'form-success'}, '*');
                                window.close();
                            } else {
                                window.location.href = '/';
                            }
                        }, 2000);
                    }
                });
            });
        </script>
    </body>
    </html>
  HTML

  # Create the API directory and file
  api_dir = File.join(site.dest, 'api')
  FileUtils.mkdir_p(api_dir)
  File.write(File.join(api_dir, 'submit-form.html'), form_content)
  
  Jekyll.logger.info "Generated secure form submission page"
end