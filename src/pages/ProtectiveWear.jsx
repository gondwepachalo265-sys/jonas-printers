import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaHardHat, 
  FaShoePrints, 
  FaGlasses,
  FaUserShield,
  FaClipboardCheck,
  FaAward,
  FaTruck,
  FaCheckCircle,
  FaWhatsapp,
  FaPhone,
  FaArrowLeft
} from 'react-icons/fa';
import usePageTitle from '../hooks/usePageTitle';

// Import your protective wear images
import helmetsImg from '../assets/Safety Helmets.png';
import gogglesImg from '../assets/Safety Goggles.png';
import vestsImg from '../assets/High-Vis Vests.png';
import glovesImg from '../assets/Safety Gloves.png';
import masksImg from '../assets/Respirators & Masks.png';
import bootsImg from '../assets/Safety Boots.png';

import ProtectiveWearModal from '../components/ProtectiveWearModal';

const ProtectiveWear = () => {
  // Set page title
  usePageTitle('Protective Wear - Quality Safety Equipment');

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);

  const products = [
    {
      id: 'helmets',
      icon: FaHardHat,
      name: 'Safety Helmets',
      desc: 'Industrial grade hard hats with adjustable straps',
      image: helmetsImg,
      colors: ['White', 'Yellow', 'Orange', 'Blue'],
      colorHex: {
        'White': '#FFFFFF',
        'Yellow': '#FFD700',
        'Orange': '#FF8C00',
        'Blue': '#1A3A8A'
      }
    },
    {
      id: 'boots',
      icon: FaShoePrints,
      name: 'Safety Boots',
      desc: 'Steel toe, waterproof, slip-resistant soles',
      image: bootsImg || 'https://via.placeholder.com/400x300/1A3A8A/FFD700?text=Safety+Boots',
      colors: ['Black', 'Brown', 'Tan'],
      colorHex: {
        'Black': '#1A1A1A',
        'Brown': '#8B4513',
        'Tan': '#D2B48C'
      }
    },
    {
      id: 'goggles',
      icon: FaGlasses,
      name: 'Safety Goggles',
      desc: 'Anti-fog, impact-resistant eye protection',
      image: gogglesImg,
      colors: ['Clear', 'Smoke', 'Amber'],
      colorHex: {
        'Clear': '#E8E8E8',
        'Smoke': '#666666',
        'Amber': '#FFBF00'
      }
    },
    {
      id: 'vests',
      icon: FaUserShield,
      name: 'High-Vis Vests',
      desc: 'Reflective safety vests for day and night visibility',
      image: vestsImg,
      colors: ['Yellow/Green', 'Orange', 'Pink'],
      colorHex: {
        'Yellow/Green': '#CCFF00',
        'Orange': '#FF6600',
        'Pink': '#FF1493'
      }
    },
    {
      id: 'gloves',
      icon: FaShieldAlt,
      name: 'Safety Gloves',
      desc: 'Cut-resistant, chemical-resistant, and thermal gloves',
      image: glovesImg,
      colors: ['Gray', 'Blue', 'Orange'],
      colorHex: {
        'Gray': '#808080',
        'Blue': '#1A3A8A',
        'Orange': '#FF6600'
      }
    },
    {
      id: 'masks',
      icon: FaClipboardCheck,
      name: 'Respirators & Masks',
      desc: 'N95, dust masks, and full-face respirators',
      image: masksImg,
      colors: ['White', 'Black'],
      colorHex: {
        'White': '#FFFFFF',
        'Black': '#1A1A1A'
      }
    }
  ];

  const handleColorClick = (productId, color) => {
    setSelectedProduct(productId);
    setSelectedColor(color);
  };

  const handleGetQuote = (productName) => {
    const colorText = selectedColor ? `\n🎨 Color: ${selectedColor}` : '';
    const message = `Hi Jonas Printers,\n\nI'm interested in getting a quote for:\n\n🛡️ Product: ${productName}${colorText}\n👤 Name: [Your Name]\n📞 Phone: [Your Phone]\n\nPlease contact me with pricing and availability.`;
    const whatsappUrl = `https://wa.me/265992144826?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleProductClick = (product) => {
    setSelectedColor(null);
    setSelectedProduct(null);
    setModalProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalProduct(null);
    document.body.style.overflow = 'unset';
  };

  const features = [
    { icon: FaAward, text: 'ISO Certified Quality' },
    { icon: FaCheckCircle, text: 'Durable & Reliable' },
    { icon: FaTruck, text: 'Bulk Delivery Available' },
  ];

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
            🛡️ Quality Safety Gear
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Protective <span className="text-[#FFD700]">Wear</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Keep your team safe with premium quality protective equipment. 
            From hard hats to safety boots — we've got you covered.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon className="text-[#FFD700] text-xl" />
                <span className="text-sm font-semibold text-[#1A3A8A]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-black text-[#1A3A8A] text-center mb-4">
          Our <span className="text-[#FFD700]">Protective</span> Range
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          High-quality safety equipment for construction, mining, manufacturing, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              {/* Product Image */}
              <div className="h-56 overflow-hidden bg-gray-100 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/1A3A8A/FFD700?text=${product.name}`;
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50 px-4 py-2 rounded-full text-sm">
                    👁️ Click to View
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#FFD700]/20 p-2 rounded-full">
                    <product.icon className="text-xl text-[#1A3A8A]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A3A8A]">{product.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
                
                {/* Color Selection */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 font-bold mb-2">AVAILABLE COLORS</p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleColorClick(product.id, color);
                        }}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                          selectedProduct === product.id && selectedColor === color
                            ? 'border-[#FFD700] ring-2 ring-[#FFD700]/50 shadow-lg'
                            : 'border-gray-300'
                        }`}
                        style={{
                          backgroundColor: product.colorHex[color] || '#CCCCCC',
                          borderColor: color === 'White' || color === 'Clear' ? '#CCCCCC' : undefined
                        }}
                        title={color}
                      />
                    ))}
                  </div>
                  
                  {selectedProduct === product.id && selectedColor && (
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs text-gray-500">Selected:</span>
                      <div 
                        className="w-5 h-5 rounded-full border border-gray-300"
                        style={{ backgroundColor: product.colorHex[selectedColor] || '#CCCCCC' }}
                      ></div>
                      <span className="text-xs font-bold text-[#1A3A8A]">{selectedColor}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-[#FF1493] font-bold">📞 Call for Best Price</p>
                
                {/* Get Quote Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGetQuote(product.name);
                  }}
                  className="mt-4 w-full bg-[#FFD700] text-[#1A3A8A] px-4 py-2 rounded-full font-bold hover:bg-[#1A3A8A] hover:text-white hover:scale-105 transition-all duration-300 shadow-lg text-sm flex items-center justify-center gap-2"
                >
                  <FaWhatsapp /> Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-[#1A3A8A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Need Bulk <span className="text-[#FFD700]">Protective Wear</span>?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            We supply businesses, construction companies, and organizations with quality safety gear.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/#contact" 
              className="bg-[#FFD700] text-[#1A3A8A] px-8 py-3 rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get a Quote
            </a>
            <a 
              href="https://wa.me/265992144826" 
              className="bg-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#1A3A8A] transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProtectiveWearModal 
        product={modalProduct} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default ProtectiveWear;