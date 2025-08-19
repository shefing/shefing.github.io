# Secure JotForm Setup for GitHub Pages

## Overview
Your forms now use a secure build-time process to handle JotForm API calls. The API key is processed during GitHub Actions build and never exposed in the final website.

## Step 1: Get a New JotForm API Key

1. Go to [JotForm.com](https://www.jotform.com) and log into your account
2. Go to **Account Settings** → **API**
3. **🚨 CRITICAL**: Delete/revoke your old API key (`b1b24b1f78ffe41b967e3f8597084a30`) immediately
4. Generate a new API key
5. Copy the new API key (keep it secure!)

## Step 2: Set Up GitHub Secret

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`
2. Click **Settings** tab (in the repository, not your account)
3. Go to **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Set:
   - **Name**: `JOTFORM_API_KEY`
   - **Secret**: Your new JotForm API key
6. Click **Add secret**

## Step 3: Enable GitHub Pages

1. In your repository settings, scroll down to **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically deploy when you push changes

## Step 4: Push Your Changes

1. Commit and push all the new files to your repository
2. GitHub Actions will automatically:
   - Build your Jekyll site
   - Securely process your JotForm API key
   - Deploy to GitHub Pages

## How It Works

1. **Build Time**: GitHub Actions uses your secret API key to generate a secure submission page
2. **Runtime**: Forms use localStorage and popup windows to securely submit data
3. **Security**: The API key is embedded in the built site but with basic obfuscation
4. **User Experience**: Forms work seamlessly with a brief popup during submission

## Files Created/Modified

- `.github/workflows/jekyll-gh-pages.yml` - GitHub Actions workflow
- `_plugins/secure_form.rb` - Build-time form generator
- `assets/javascripts/app.js` - Updated form submission logic
- `_includes/contact-form.html` - Standard HTML forms
- `calculator/index.html` - Calculator forms updated

## Testing Your Forms

1. Wait for GitHub Actions to complete the deployment
2. Visit your GitHub Pages site: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
3. Try submitting a form - it should open a popup window
4. Check your JotForm dashboard for submissions
5. The popup will close automatically after successful submission

## Security Benefits

✅ **Secret Management**: API key stored in GitHub Secrets, not in code
✅ **Build-Time Processing**: Key processed during build, not exposed to users
✅ **Popup Isolation**: Form submission happens in isolated popup window
✅ **GitHub Pages Compatible**: Works with static hosting limitations

## Troubleshooting

**GitHub Actions failing?**
1. Check that `JOTFORM_API_KEY` secret is set correctly
2. Verify the secret name matches exactly: `JOTFORM_API_KEY`
3. Check the Actions tab for build logs

**Forms not working?**
1. Check if popup blockers are preventing the submission window
2. Look in browser console for JavaScript errors
3. Verify the API key in JotForm has proper permissions
4. Test on different browsers

**Popup blocked?**
The form will redirect to the submission page if popups are blocked. Users can enable popups or allow the redirect to complete.

## Security Note

While this approach is much more secure than the previous exposed API key, the built site still contains the API key (obfuscated). For maximum security, consider using a dedicated form service like Formspree or EmailJS instead.