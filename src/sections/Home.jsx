import { Code, Zap, TrendingUp, ChevronDown } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'We build modern and responsive websites that engage your audience and drive conversions with cutting-edge technologies.',
    },
    {
      icon: Zap,
      title: 'Technology Consulting',
      description:
        'Helping businesses adopt modern technology solutions to streamline operations and maximize efficiency.',
    },
    {
      icon: TrendingUp,
      title: 'Digital Strategy',
      description:
        'Strategic planning for digital growth that aligns with your business goals and market opportunities.',
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="w-full">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center animate-fadeIn">
            {/* Main Headline */}
            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">UpGrowU Agency</span>
            </h1>

            {/* Tagline */}
            <p className="font-poppins text-xl sm:text-2xl text-gray-700 mb-6 font-semibold">
              Innovative Digital Solutions for Modern Businesses
            </p>

            {/* Description */}
            <p className="font-inter text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              We help companies grow through technology, creativity, and digital innovation. Our expert team delivers
              solutions that transform businesses and create lasting impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-poppins font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-blue-600 font-poppins font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>

            {/* Scroll Indicator */}
            <div
              className="flex justify-center cursor-pointer animate-bounce"
              onClick={() => scrollToSection('services')}
            >
              <ChevronDown className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to meet your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
