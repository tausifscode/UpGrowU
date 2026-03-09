import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'patilayush.240000@gmail.com',
      href: 'mailto:patilayush.240000@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 72555738',
      href: 'tel:+9172555738',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India, Pune',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-8 animate-slideUp">
            {/* Section Title */}
            <div>
              <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
            </div>

            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white group-hover:bg-blue-700 transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-gray-900">{info.label}</p>
                    <p className="font-inter text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-poppins font-semibold text-gray-900 mb-2">Response Time</h4>
              <p className="font-inter text-gray-600">
                We typically respond to inquiries within 24 hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
