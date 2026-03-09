import { Linkedin, Instagram, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      bgColor: 'hover:bg-blue-600',
    },
    {
      label: 'Instagram',
      icon: Instagram,
      href: '#',
      bgColor: 'hover:bg-pink-500',
    },
    {
      label: 'GitHub',
      icon: Github,
      href: '#',
      bgColor: 'hover:bg-gray-700',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-poppins font-bold text-2xl text-blue-400 mb-2">
              UpGrowU
            </h3>
            <p className="text-gray-400 font-inter text-sm">
              Innovative Digital Solutions for Modern Businesses
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 font-inter text-sm">
              <li><a href="#home" className="hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-gray-800 text-white transition-all duration-300 ${link.bgColor}`}
                    title={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Copyright */}
        <div className="pt-8 text-center text-gray-400 font-inter text-sm">
          <p>© {currentYear} UpGrowU Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
