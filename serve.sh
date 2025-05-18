#!/bin/bash

# Check if bundler is installed
if ! command -v bundle &> /dev/null; then
    echo "Bundler is not installed. Attempting to install..."
    gem install bundler
fi

# Install dependencies
echo "Installing dependencies..."
bundle install

# Serve the site
echo "Starting Jekyll server..."
JEKYLL_ENV=development bundle exec jekyll serve

# If you want to run with Google Analytics enabled, use:
# JEKYLL_ENV=production bundle exec jekyll serve