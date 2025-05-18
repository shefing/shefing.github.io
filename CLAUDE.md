# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based static website for Shefing, a digital transformation agency. The site includes a portfolio, blog, services showcase, and expertise sections. It's primarily built with:

- Jekyll (Ruby-based static site generator)
- HTML/CSS/JavaScript for frontend
- Foundation framework for UI components

## Main Commands

### Setting Up & Running the Site

```bash
# Install required gems
bundle install

# Run the Jekyll server locally
bundle exec jekyll serve

# Build the site for production
bundle exec jekyll build
```

### Common Development Tasks

#### File Structure

- `_config.yml`: Main Jekyll configuration
- `_includes/`: Reusable HTML components
- `_layouts/`: Page templates
- `_posts/`: Blog content (Markdown files)
- `_works/`: Portfolio content (Markdown files)
- `assets/`: Static files (CSS, JavaScript, images)
- `index.html`: Home page

## Architecture Notes

### Site Configuration

The site configuration is managed in `_config.yml`, which includes:
- Site title, description, and contact information
- Build settings and plugins (jekyll-feed, jekyll-paginate)
- Collection definitions for works/portfolio
- Pagination settings for the blog

### Collections

The site uses Jekyll collections to organize content:
- `_works`: Portfolio items with custom output paths and the "work" layout
- Blog posts are handled through the standard Jekyll posts system

### Page Structure

Most pages follow a consistent structure:
1. YAML front matter for page configuration
2. Layout definition (default, blog, post, or work)
3. Content sections with includes for components

### JavaScript Components

The site includes interactive elements such as:
- Project calculator (`calculator.js`): A tool for estimating project costs
- Various UI components and animations

## Important Implementation Notes

1. The site uses front matter variables extensively to define page content (services, expertise items, etc.)
2. Jekyll plugins handle pagination and RSS feed generation
3. The site uses the Foundation framework for responsive layout
4. Custom styling is managed through SASS files in the `_sass` directory