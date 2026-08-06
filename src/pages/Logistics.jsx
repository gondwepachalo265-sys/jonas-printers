import { Link } from 'react-router-dom';
import { 
  FaTruck, 
  FaWarehouse, 
  FaRoute, 
  FaBoxes,
  FaClock,
  FaShieldAlt,
  FaWhatsapp,
  FaPhone,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaArrowLeft
} from 'react-icons/fa';
import usePageTitle from '../hooks/usePageTitle';

const Logistics = () => {
  // Set page title
  usePageTitle('Logistics - Reliable Transport & Delivery Services');

  const services = [
    {
      icon: FaTruck,
      title: 'Goods Transport',
      desc: 'Reliable transportation for goods across Malawi and beyond.',
      details: ['Local & Regional', 'Heavy & Light Cargo', 'Temperature Controlled']
    },
    {
      icon: FaWarehouse,
      title: 'Warehousing',
      desc: 'Secure storage solutions for your inventory and equipment.',
      details: ['Short & Long-term', '24/7 Security', 'Inventory Management']
    },
    {
      icon: FaRoute,
      title: 'Fleet Management',
      desc: 'Professional management of your logistics fleet.',
      details: ['Vehicle Tracking', 'Maintenance Scheduling', 'Driver Management']
    },
    {
      icon: FaBoxes,
      title: 'Distribution & Delivery',
      desc: 'Fast and efficient delivery to your customers or sites.',
      details: ['Same-Day Delivery', 'Bulk Distribution', 'Last-Mile Delivery']
    }
  ];

  const reasons = [
    { icon: FaClock, text: 'On-Time Delivery' },
    { icon: FaShieldAlt, text: 'Safe & Secure' },
    { icon: FaAward, text: 'Experienced Team' },
    { icon: FaUsers, text: 'Customer Focused' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#1A3A8A] font-semibold hover:text-[#FFD700] transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#1A3A8A] to-[#FF1493] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[#FFD700] transform -skew-y-6"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-[#FFD700] text-[#1A3A8A] px-6 py-2 rounded-full font-bold mb-6 text-sm">
            🚚 Reliable Logistics
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Logistics <span className="text-[#FFD700]">Solutions</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Moving your business forward with reliable, safe, and professional logistics services.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="bg-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {reasons.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon className="text-[#FFD700] text-xl" />
                <span className="text-sm font-semibold text-[#1A3A8A]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-black text-[#1A3A8A] text-center mb-4">
          Our <span className="text-[#FFD700]">Logistics</span> Services
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Comprehensive logistics solutions tailored to your business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="bg-[#FFD700]/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FFD700] transition-all duration-300">
                <service.icon className="text-3xl text-[#1A3A8A] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A3A8A] mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <ul className="space-y-1">
                {service.details.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                    <FaCheckCircle className="text-[#FFD700] text-xs" /> {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A3A8A] text-center mb-4">
            Get a <span className="text-[#FFD700]">Free Quote</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Contact us today and we'll get back to you within 30 minutes.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="bg-[#FFD700] p-4 rounded-full">
                    <FaPhone className="text-[#1A3A8A] text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us (Malawi)</p>
                    <a href="tel:+265992144826" className="text-xl font-bold text-[#1A3A8A] hover:text-[#FFD700] transition-colors">
                      +265 99 214 4826
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="bg-[#25D366] p-4 rounded-full">
                    <FaWhatsapp className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp Us</p>
                    <a href="https://wa.me/265992144826" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-[#1A3A8A] hover:text-[#25D366] transition-colors">
                      +265 99 214 4826
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1A3A8A] p-4 rounded-full">
                    <FaBoxes className="text-[#FFD700] text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <a href="mailto:info@jonasprinters.com" className="text-xl font-bold text-[#1A3A8A] hover:text-[#FFD700] transition-colors">
                      info@jonasprinters.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="bg-[#FFD700] p-4 rounded-full">
                    <FaRoute className="text-[#1A3A8A] text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Visit Us</p>
                    <p className="text-lg font-bold text-[#1A3A8A]">
                      Kristwick Baulevard Mall
                    </p>
                    <p className="text-sm text-gray-500">Shop B6, Blantyre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1A3A8A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Need <span className="text-[#FFD700]">Logistics</span> Services?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a free quote on your logistics needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              className="bg-[#FFD700] text-[#1A3A8A] px-8 py-3 rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              📞 Request a Quote
            </a>
            <a 
              href="https://wa.me/265992144826" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#1A3A8A] transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;