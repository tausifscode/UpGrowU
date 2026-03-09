import { FileDown, Award, Eye } from 'lucide-react';

export default function About() {
  const handleDownloadPDF = () => {
    // Create a link element to download the PDF
    const link = document.createElement('a');
    link.href = '/pdfs/company-profile.pdf';
    link.download = 'UpGrowU-Company-Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Our Agency
          </h2>
          <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            UpGrowU Agency is a newly established digital solutions company focused on helping businesses grow using
            modern technologies and innovative strategies.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 animate-slideUp">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="font-poppins text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="font-inter text-gray-600 leading-relaxed">
              Our mission is to deliver reliable and innovative digital solutions that empower businesses to thrive in
              the digital age. We believe in building long-term partnerships with our clients.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="font-poppins text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="font-inter text-gray-600 leading-relaxed">
              To become a trusted technology partner for businesses worldwide. We envision a future where technology is
              accessible and beneficial to all organizations, regardless of their size.
            </p>
          </div>
        </div>

        {/* Company Profile Download Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 sm:p-12 text-center text-white animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <div className="flex justify-center mb-4">
            <FileDown className="w-12 h-12" />
          </div>

          <h3 className="font-poppins text-2xl sm:text-3xl font-bold mb-4">Company Profile</h3>

          <p className="font-inter text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Download our comprehensive company profile to learn more about our services, vision, and how we can help
            your business succeed in the digital landscape.
          </p>

          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-poppins font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
          >
            <FileDown className="w-5 h-5" />
            Download Company Profile
          </button>
        </div>

        {/* Stats Section (Optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '30+', label: 'Happy Clients' },
            { number: '99%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slideUp"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <p className="font-poppins text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
              <p className="font-inter text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
