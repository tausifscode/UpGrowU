# UpGrowU Agency Website - Development Guide

## Project Overview

This is a modern, responsive agency website built with React, Vite, and Tailwind CSS. It's a single-page scrolling website with three main sections: Home, About, and Contact.

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env.local`
   - Add your EmailJS credentials:
     - `VITE_EMAILJS_PUBLIC_KEY`
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`

3. **EmailJS Setup**
   - Create a free account at https://www.emailjs.com/
   - Set up an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Copy your credentials to `.env.local`

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation with mobile menu
│   ├── ServiceCard.jsx # Service card component
│   ├── ContactForm.jsx # Email form with EmailJS
│   └── Footer.jsx      # Footer with social links
├── sections/           # Page sections
│   ├── Home.jsx        # Hero and services
│   ├── About.jsx       # About section with PDF
│   └── Contact.jsx     # Contact form section
└── App.jsx             # Main app component
```

## Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Scrolling**: Smooth scroll behavior between sections
- **Email Integration**: EmailJS for contact form
- **PDF Download**: Company profile download functionality
- **Mobile Menu**: Hamburger menu for mobile devices
- **Animations**: Smooth transitions and hover effects

## Customization Guide

### Update Company Information
- Edit `src/components/Navbar.jsx` for logo/company name
- Edit `src/sections/Home.jsx` for headline and tagline
- Edit `src/sections/About.jsx` for mission/vision
- Edit `src/sections/Contact.jsx` for contact details
- Edit `src/components/Footer.jsx` for social links

### Update Colors
Edit `tailwind.config.js` theme colors:
- Primary: `#2563EB`
- Secondary: `#0F172A`
- Accent: `#38BDF8`

### Update Company Profile PDF
Replace `public/pdfs/company-profile.pdf` with your actual PDF file.

## Deployment

Build and deploy to any static hosting:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static web host

```bash
npm run build
# Deploy the 'dist' folder
```

## Troubleshooting

### Email not sending?
- Check environment variables are properly set
- Verify EmailJS service is active
- Check template ID matches the template you created
- Look at browser console for errors

### Images not loading?
- Place images in `public/` directory
- Reference them as `/image-name.format`

### Styling issues?
- Clear browser cache (Ctrl+Shift+Delete)
- Run `npm run build` to generate fresh CSS

## Technologies Used

- React 18
- Vite 7
- Tailwind CSS 4
- EmailJS
- Lucide React (icons)
- PostCSS & Autoprefixer

## Best Practices

1. Keep components small and focused
2. Use Tailwind utility classes instead of custom CSS
3. Maintain responsive design for all screen sizes
4. Test form submission with different email addresses
5. Regularly update dependencies with `npm update`

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Guide](https://vite.dev)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Lucide Icons](https://lucide.dev)
