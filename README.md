# Eleventy Personal Website

A clean, one-page personal website built with Eleventy (11ty).

## Project Structure

```
├── .eleventy.js          # Eleventy configuration
├── package.json          # Dependencies and scripts
├── src/
│   ├── _includes/
│   │   └── layout.njk    # Base layout template
│   ├── css/
│   │   └── style.css     # Stylesheet
│   └── index.md          # Main page content
└── README.md             # This file
```

## Prerequisites

Before running this project, you need to have Node.js and npm installed on your system.

### Installing Node.js and npm

1. **Using Homebrew (recommended for macOS):**
   ```bash
   brew install node
   ```

2. **Download from official website:**
   - Visit [nodejs.org](https://nodejs.org/)
   - Download and install the LTS version

3. **Using Node Version Manager (nvm):**
   ```bash
   # Install nvm first, then:
   nvm install node
   nvm use node
   ```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   
   This will start the development server with hot reload at `http://localhost:8080`

3. **Build for production:**
   ```bash
   npm run build
   ```
   
   This creates a `_site` directory with the built website.

## Customization

### Content
- Edit `src/index.md` to change the page content
- Update the front matter (title, description, author) at the top of the file
- Replace placeholder text with your actual information

### Styling
- Modify `src/css/style.css` to change colors, fonts, and layout
- The design is fully responsive and uses modern CSS

### Layout
- Edit `src/_includes/layout.njk` to modify the HTML structure
- Add new meta tags, scripts, or other head elements as needed

## Features

- ✅ Clean, minimal design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Semantic HTML5
- ✅ SEO-friendly meta tags
- ✅ Modern CSS with hover effects
- ✅ Accessible navigation
- ✅ Hot reload for development
- ✅ Optimized for performance

## Deployment

The built site in the `_site` directory can be deployed to any static hosting service:

- **Netlify:** Drag and drop the `_site` folder
- **Vercel:** Connect your repository
- **GitHub Pages:** Push the `_site` contents to a gh-pages branch
- **Any web server:** Upload the `_site` contents to your server

## Browser Support

This website works in all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
