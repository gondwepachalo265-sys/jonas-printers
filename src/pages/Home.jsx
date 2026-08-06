import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  FaPrint, FaLaptop, FaTools, FaBoxes, FaVideo, FaPlug, 
  FaAward, FaShieldAlt, FaClock, FaTruck,
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp
} from 'react-icons/fa';
import heroImage from "../assets/herosect.png";
import { Link } from 'react-router-dom';
import { productList } from '../data/products';
import RepairWizard from '../components/RepairWizard';
import Testimonials from '../components/Testimonials';
import ProductModal from '../components/ProductModal';
import Blog from '../components/Blog';
import usePageTitle from '../hooks/usePageTitle';

const Home = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const location = useLocation();
  
  // Set page title
  usePageTitle('Home - Printers, Laptops & Office Solutions');

  // Handle search params from navbar
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('search');
    
    if (searchQuery) {
      // Scroll to products section after a short delay
      setTimeout(() => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
          const offset = 80;
          const elementPosition = productsSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 500);
    }
  }, [location.search]);

  const services = [
    { icon: FaPrint, title: 'Printers', desc: 'Canon, HP, RISO, Konica Minolta & more' },
    { icon: FaLaptop, title: 'Laptops', desc: 'New & refurbished laptops' },
    { icon: FaTools, title: 'Repairs', desc: 'Same-day printer & laptop repair' },
    { icon: FaBoxes, title: 'Toner & Paper', desc: 'Original supplies in stock' },
    { icon: FaVideo, title: 'CCTV & Servers', desc: 'Secure your business' },
    { icon: FaPlug, title: 'Cables & Accessories', desc: 'USB, network, printer cables' },
    { 
      icon: FaShieldAlt, 
      title: 'Protective Wear', 
      desc: 'Safety helmets, boots, goggles & more',
      link: '/protective-wear'
    },
    { 
      icon: FaTruck, 
      title: 'Logistics', 
      desc: 'Reliable transport & delivery services',
      link: '/logistics'
    },
  ];

  const trustBadges = [
    { icon: FaAward, text: '10+ Years Experience' },
    { icon: FaShieldAlt, text: '100% Genuine Parts' },
    { icon: FaClock, text: 'Same-Day Repairs' },
    { icon: FaTruck, text: 'Bulk Delivery Available' },
  ];

  const handleProductClick = (product) => {
    setModalProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalProduct(null);
    document.body.style.overflow = 'unset';
  };

  const showCustomAlert = () => {
    const modal = document.getElementById('customAlert');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
    setTimeout(() => {
      const modal = document.getElementById('customAlert');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'unset';
      }
    }, 5000);
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <section id="top" className="min-h-[85vh] flex items-center relative">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Jonas Printers Showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl pl-8 md:pl-16">
            <div className="inline-block bg-[#FFD700] text-[#1A3A8A] px-6 py-2 rounded-full font-bold mb-6 text-sm">
              🏆 Canon Authorized Dealer
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-white">Your</span>
              <br />
              <span className="text-[#FFD700]">One-Stop Shop</span>
              <br />
              <span className="text-white">for</span>
              <br />
              <span className="text-[#FFD700]">Printers, Laptops</span>
              <br />
              <span className="text-white">&amp; Office Solutions</span>
            </h1>
            <p className="text-lg text-white/90 mt-6 max-w-xl">
              Serving Blantyre City for over a decade – Walk-ins welcome!
              From toner to servers, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#repairForm" className="bg-[#FFD700] text-[#1A3A8A] px-8 py-3 rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg inline-block">
                🔧 Book a Repair
              </a>
              <a href="#products" className="bg-white text-[#1A3A8A] px-8 py-3 rounded-full font-bold hover:bg-[#FFD700] hover:scale-105 transition-all duration-300 shadow-lg inline-block">
                Browse Products
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div key={index} className="bg-white/95 rounded-xl p-4 text-center border border-white/20 hover:shadow-lg transition-all duration-300">
                <badge.icon className="text-[#1A3A8A] text-3xl mx-auto mb-2" />
                <p className="text-[#1A3A8A] font-semibold text-sm">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#FFD700] text-[#1A3A8A] px-6 py-2 rounded-full font-bold text-sm mb-4">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3A8A] mb-6">
              What We <span className="text-[#FFD700]">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything your office needs under one roof
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link || '#'}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="bg-[#FFD700]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFD700] transition-all duration-300">
                  <service.icon className="text-3xl text-[#1A3A8A] group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#1A3A8A] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
                {service.link && (
                  <span className="inline-block mt-3 text-xs text-[#FFD700] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Learn More →
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== BLOG SECTION ===== */}
      <Blog />

      {/* ===== REPAIR CTA ===== */}
      <section id="repairs" className="py-20 bg-[#1A3A8A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Need a <span className="text-[#FFD700]">Repair</span>?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Drop off today, pick up tomorrow. We fix all printer & laptop issues.
          </p>
          <a href="#repairForm" className="bg-[#FFD700] text-[#1A3A8A] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl inline-block">
            Book Now & Get a Quote
          </a>
        </div>
      </section>

      {/* ===== REPAIR WIZARD ===== */}
      <section id="repairWizard" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3A8A] mb-6">
              Smart <span className="text-[#FFD700]">Repair</span> Wizard
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us what's wrong and we'll fix it fast. 3 simple steps!
            </p>
          </div>
          <RepairWizard />
        </div>
      </section>

      {/* ===== REPAIR FORM WITH CUSTOM ALERT ===== */}
      <section id="repairForm" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A3A8A] text-center mb-4">
            Book a <span className="text-[#FFD700]">Repair</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Fill in the form below and our team will contact you within 30 minutes
          </p>

          <form
            className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-xl"
            onSubmit={(e) => {
              e.preventDefault();
              showCustomAlert();
              e.target.reset();
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-bold text-[#1A3A8A] mb-2">Full Name *</label>
                <input type="text" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD700] focus:outline-none transition-colors bg-white" placeholder="your full name " />
              </div>
              <div>
                <label className="block font-bold text-[#1A3A8A] mb-2">Phone Number *</label>
                <input type="tel" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD700] focus:outline-none transition-colors bg-white" placeholder="+265 999 999 999" />
              </div>
              <div>
                <label className="block font-bold text-[#1A3A8A] mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD700] focus:outline-none transition-colors bg-white" placeholder="your email address" />
              </div>
              <div>
                <label className="block font-bold text-[#1A3A8A] mb-2">Device Type *</label>
                <select required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD700] focus:outline-none transition-colors bg-white">
                  <option>Laptop</option>
                  <option>Printer</option>
                  <option>Desktop</option>
                  <option>Server</option>
                  <option>CCTV Camera</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-[#1A3A8A] mb-2">Brand *</label>
                <select required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD700] focus:outline-none transition-colors bg-white">
                  <option>HP</option>
                  <option>Dell</option>
                  <option>Lenovo</option>
                  <option>Epson</option>
                  <option>Brother</option>
                  <option>Apple</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-[#1A3A8A] mb-2">Preferred Date</label>
                <input type="date" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD700] focus:outline-none transition-colors bg-white" />
              </div>
            </div>

            <div className="mt-6">
              <label className="block font-bold text-[#1A3A8A] mb-2">Describe the Issue *</label>
              <textarea required rows="4" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD700] focus:outline-none transition-colors bg-white" placeholder="e.g., My printer is showing a paper jam error..."></textarea>
            </div>

            <button type="submit" className="w-full mt-8 bg-[#1A3A8A] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFD700] hover:text-[#1A3A8A] hover:scale-105 transition-all duration-300 shadow-lg inline-block">
              Send Repair Request
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              * Required fields. We'll call you within 30 minutes.
            </p>
          </form>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#FFD700] text-[#1A3A8A] px-6 py-2 rounded-full font-bold text-sm mb-4">
              Shop by Category
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3A8A] mb-6">
              Our <span className="text-[#FFD700]">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our showroom for best prices! Walk-ins welcome.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList.map((item) => (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 cursor-pointer"
                onClick={() => handleProductClick(item)}
              >
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#1A3A8A]/5 to-[#FF1493]/5">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/1A3A8A/FFD700?text=${item.name}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A8A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                    <span className="text-white font-bold text-sm bg-[#FFD700] text-[#1A3A8A] px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      👁️ View Details
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-[#1A3A8A] group-hover:text-[#FFD700] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                      In Stock
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                    <span className="inline-block w-2 h-2 bg-[#FFD700] rounded-full"></span>
                    Multiple brands available
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">Click to explore</span>
                    <span className="text-[#FFD700] font-bold text-sm group-hover:translate-x-1 transition-transform duration-300">
                      View Products →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3A8A] mb-6">
              Get In <span className="text-[#FFD700]">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us or reach out – we're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl shadow-lg flex items-start gap-4 hover:shadow-2xl transition-all duration-300">
                <div className="bg-[#FFD700] p-4 rounded-full text-[#1A3A8A] text-2xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A3A8A]">Visit Us</h4>
                  <p className="text-gray-600">Kristwick Baulevard Mall</p>
                  <p className="text-gray-600">Shop No. B6, Kamuzu Highway</p>
                  <p className="text-gray-600">Blantyre, Malawi</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-lg flex items-start gap-4 hover:shadow-2xl transition-all duration-300">
                <div className="bg-[#1A3A8A] p-4 rounded-full text-[#FFD700] text-2xl">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A3A8A]">Call Us (Malawi)</h4>
                  <a href="tel:+265992144826" className="text-gray-600 text-lg hover:text-[#FFD700] transition-colors">
                    +265 99 214 4826
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-lg flex items-start gap-4 hover:shadow-2xl transition-all duration-300">
                <div className="bg-[#1A3A8A] p-4 rounded-full text-[#FFD700] text-2xl">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A3A8A]">Call Us (South Africa)</h4>
                  <a href="tel:+27844653463" className="text-gray-600 text-lg hover:text-[#FFD700] transition-colors">
                    +27 84 465 3463
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-lg flex items-start gap-4 hover:shadow-2xl transition-all duration-300">
                <div className="bg-[#FFD700] p-4 rounded-full text-[#1A3A8A] text-2xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A3A8A]">Email Us</h4>
                  <a href="mailto:info@jonasprinters.com" className="text-gray-600 hover:text-[#FFD700] transition-colors">
                    info@jonasprinters.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <a href="https://facebook.com/jonasprinters" target="_blank" rel="noopener noreferrer" className="bg-[#1A3A8A] text-white p-4 rounded-full hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 text-2xl">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com/jonasprinters" target="_blank" rel="noopener noreferrer" className="bg-[#1A3A8A] text-white p-4 rounded-full hover:bg-[#E4405F] hover:scale-110 transition-all duration-300 text-2xl">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/265992144826" target="_blank" rel="noopener noreferrer" className="bg-[#1A3A8A] text-white p-4 rounded-full hover:bg-[#25D366] hover:scale-110 transition-all duration-300 text-2xl">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl shadow-lg h-96 hover:shadow-2xl transition-all duration-300">
              <iframe
                src="https://www.google.com/maps?q=Kristwick+Baulevard+Mall+Blantyre&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                title="Jonas Printers Location - Kristwick Baulevard Mall, Blantyre"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT MODAL ===== */}
      <ProductModal 
        product={modalProduct} 
        onClose={closeModal} 
      />

      {/* ===== CUSTOM ALERT MODAL ===== */}
      <div 
        id="customAlert" 
        className="fixed inset-0 z-[999] hidden items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn"
      >
        <div className="bg-white rounded-3xl max-w-md w-full mx-4 p-8 text-center animate-scaleIn shadow-2xl">
          {/* Success Icon with Brand Colors */}
          <div className="w-24 h-24 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-[#FFD700]">
            <svg className="w-12 h-12 text-[#1A3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-black text-[#1A3A8A] mb-2">Repair Request Sent!</h3>
          <p className="text-gray-600 mb-6">We'll contact you within 30 minutes.</p>
          
          <div className="bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 bg-[#1A3A8A] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#1A3A8A] font-medium">We're on it!</span>
            </div>
          </div>

          <button 
            onClick={() => {
              const modal = document.getElementById('customAlert');
              if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = 'unset';
              }
            }}
            className="bg-[#FFD700] text-[#1A3A8A] px-8 py-3 rounded-full font-bold hover:bg-[#1A3A8A] hover:text-white transition-all duration-300 shadow-lg w-full"
          >
            Got it!
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;