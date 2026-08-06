import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaWhatsapp,
  FaAdjust,
  FaMicrochip,
  FaSyncAlt,
  FaBroom,
  FaTachometerAlt,
  FaExclamationTriangle,
  FaPrint,
  FaLaptop,
  FaServer,
  FaShieldAlt
} from 'react-icons/fa';
import usePageTitle from '../hooks/usePageTitle';

const AdvancedServices = () => {
  // Set page title
  usePageTitle('Advanced Services - Premium Printer & Laptop Services');

  const services = [
    { 
      icon: FaAdjust, 
      title: 'Printer Calibration', 
      desc: 'Perfect color accuracy and alignment for professional prints'
    },
    { 
      icon: FaMicrochip, 
      title: 'Hardware Diagnostics', 
      desc: 'Comprehensive system health check to identify potential issues'
    },
    { 
      icon: FaSyncAlt, 
      title: 'Firmware Updates', 
      desc: 'Latest software for optimal performance and security'
    },
    { 
      icon: FaBroom, 
      title: 'Deep Cleaning', 
      desc: 'Internal cleaning for better print quality and longevity'
    },
    { 
      icon: FaTachometerAlt, 
      title: 'Performance Tuning', 
      desc: 'Optimize speed and efficiency for maximum productivity'
    },
    { 
      icon: FaExclamationTriangle, 
      title: 'Error Code Fixes', 
      desc: 'Professional error resolution for complex printer issues'
    }
  ];

  const serviceCategories = [
    { icon: FaPrint, label: 'Printers', desc: 'All brands & models' },
    { icon: FaLaptop, label: 'Laptops', desc: 'Hardware & software' },
    { icon: FaServer, label: 'Servers', desc: 'Enterprise solutions' },
    { icon: FaShieldAlt, label: 'Security', desc: 'Data protection' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-4">
        <Link 
          to="/#services" 
          className="inline-flex items-center gap-2 text-[#1A3A8A] font-semibold hover:text-[#FFD700] transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> 
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-[#1A3A8A] to-[#FF1493] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#FFD700] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FF1493] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-[#FFD700] text-[#1A3A8A] px-6 py-2 rounded-full font-bold mb-6 text-sm">
            ⚡ Premium Services
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Advanced <span className="text-[#FFD700]">Services</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Premium printer and laptop services to keep your devices running at peak performance.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <div className="bg-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceCategories.map((cat, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="bg-[#FFD700]/20 p-3 rounded-full">
                  <cat.icon className="text-xl text-[#1A3A8A]" />
                </div>
                <div>
                  <p className="font-bold text-[#1A3A8A] text-sm">{cat.label}</p>
                  <p className="text-xs text-gray-500">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-black text-[#1A3A8A] text-center mb-4">
          Our <span className="text-[#FFD700]">Expert</span> Services
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Professional diagnostics, repairs, and maintenance for all your office equipment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 p-8"
            >
              <div className="bg-[#FFD700]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#FFD700] transition-all duration-300">
                <service.icon className="text-3xl text-[#1A3A8A] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#1A3A8A] mb-2 group-hover:text-[#FFD700] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-[#1A3A8A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Need <span className="text-[#FFD700]">Professional</span> Service?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Our experts are ready to help you get your devices back to optimal performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+265992144826" 
              className="bg-[#FFD700] text-[#1A3A8A] px-8 py-3 rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
            >
              <FaPhone /> Call Now
            </a>
            <a 
              href="https://wa.me/265992144826" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#1A3A8A] transition-all duration-300 shadow-lg inline-flex items-center gap-2"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
            <Link 
              to="/#contact" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#1A3A8A] transition-all duration-300 shadow-lg inline-flex items-center gap-2"
            >
              📍 Visit Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedServices;