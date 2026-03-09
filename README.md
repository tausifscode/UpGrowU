# UpGrowU Agency Website

A modern, responsive single-page agency website built with React, Vite, and Tailwind CSS. This website showcases a digital agency's services with smooth scrolling, email integration, and a professional design.

## Features

✨ **Modern Design** - Clean, professional UI with gradient backgrounds and smooth animations
📱 **Fully Responsive** - Mobile-first design that works on all devices
🎯 **Single-Page Scrolling** - Seamless navigation between sections
📧 **Email Integration** - EmailJS integration for contact form submissions
📥 **PDF Download** - Company profile PDF download feature
⚡ **Fast Performance** - Built with Vite for optimal performance
🎨 **Beautiful Components** - Reusable React components with hover animations

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation with mobile menu
│   ├── ServiceCard.jsx     # Reusable service card component
│   ├── ContactForm.jsx     # Email form with validation
│   └── Footer.jsx          # Footer with social links
├── sections/
│   ├── Home.jsx            # Hero section and services
│   ├── About.jsx           # About section with PDF download
│   └── Contact.jsx         # Contact section with form
├── App.jsx                 # Main app component
├── App.css                 # Tailwind CSS imports
└── index.css               # Global styles
public/
└── pdfs/
    └── company-profile.pdf # Company profile PDF
```

## Installation

1. **Clone the repository**
   ```bash
   cd upgrowu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Add your EmailJS credentials

4. **Start the development server**
   ```bash
   npm run dev
   ```

The website will be available at `http://localhost:5173/`

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

### Getting EmailJS Credentials

1. Visit [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Create an Email Service (Gmail, Outlook, etc.)
4. Create an Email Template
5. Copy your Public Key, Service ID, and Template ID
6. Add them to your `.env.local` file

## Sections

### Home Section
- **Hero Section**: Eye-catching headline with CTA buttons
- **Services**: Three service cards with icons, descriptions, and hover effects

### About Section
- **Agency Description**: Company background and values
- **Mission & Vision**: Clear mission and vision statements
- **Company Stats**: Quick stats about the agency
- **PDF Download**: Download company profile button

### Contact Section
- **Contact Information**: Email, phone, and location details
- **Contact Form**: Email form with validation and EmailJS integration
- **Success/Error Messages**: Real-time user feedback

## Technology Stack

- **React 18**: UI library
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **EmailJS**: Email service integration
- **Lucide React**: Beautiful icon library
- **PostCSS & Autoprefixer**: CSS processing

## Design System

### Color Palette
- **Primary**: `#2563EB` (Blue)
- **Secondary**: `#0F172A` (Dark Blue)
- **Accent**: `#38BDF8` (Cyan)

### Typography
- **Headings**: Poppins (Bold)
- **Body**: Inter (Regular/Medium)

### Components Features
- Rounded corners on cards
- Soft shadows with hover effects
- Smooth transitions and animations
- Mobile-responsive grid layouts

## Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Customization

### Update Company Information
Edit the following files to customize company details:
- `src/components/Navbar.jsx` - Update logo/company name
- `src/sections/Home.jsx` - Update headline and tagline
- `src/sections/About.jsx` - Update mission and vision
- `src/sections/Contact.jsx` - Update contact information
- `src/components/Footer.jsx` - Update social links

### Update PDF
Replace `public/pdfs/company-profile.pdf` with your actual company profile PDF.

### Customize Colors
Edit `tailwind.config.js` to change the color palette throughout the site.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Vite**: Sub-millisecond HMR (Hot Module Replacement)
- **Tailwind CSS**: Optimized CSS with PurgeCSS
- **Production Build**: Minified and optimized

## Deployment

Build the project for production:

```bash
npm run build
```

The `dist/` folder is ready to be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## Contributing

Feel free to fork, modify, and use this template for your own projects.

## License

Open source - free to use and modify

## Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

