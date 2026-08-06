import { useState } from 'react';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';

const ProtectiveWearModal = ({ product, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  if (!product) return null;

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleGetQuote = () => {
    const colorText = selectedColor ? `\n🎨 Color: ${selectedColor}` : '';
    const message = `Hi Jonas Printers,\n\nI'm interested in getting a quote for:\n\n🛡️ Product: ${product.name}${colorText}\n👤 Name: [Your Name]\n📞 Phone: [Your Phone]\n\nPlease contact me with pricing and availability.`;
    const whatsappUrl = `https://wa.me/265992144826?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto relative animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaTimes className="text-2xl text-[#1A3A8A]" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Left - Image */}
          <div className="h-80 lg:h-auto rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/600x500/1A3A8A/FFD700?text=${product.name}`;
              }}
            />
          </div>

          {/* Right - Details */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#FFD700]/20 p-3 rounded-full">
                <product.icon className="text-3xl text-[#1A3A8A]" />
              </div>
              <h2 className="text-3xl font-black text-[#1A3A8A]">{product.name}</h2>
            </div>

            <p className="text-gray-600 mb-6">{product.desc}</p>

            {/* Colors - SELECTABLE */}
            <div className="mb-6">
              <p className="text-sm font-bold text-[#1A3A8A] mb-3">AVAILABLE COLORS</p>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorClick(color)}
                    className={`flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 ${
                      selectedColor === color
                        ? 'ring-2 ring-[#FFD700] ring-offset-2 rounded-full'
                        : ''
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-full border-2 shadow-md transition-all duration-300"
                      style={{
                        backgroundColor: product.colorHex?.[color] || '#CCCCCC',
                        borderColor: color === 'White' || color === 'Clear' ? '#CCCCCC' : 
                        selectedColor === color ? '#FFD700' : '#e5e7eb'
                      }}
                    />
                    <span className={`text-xs font-medium ${
                      selectedColor === color ? 'text-[#FFD700]' : 'text-gray-500'
                    }`}>
                      {color}
                    </span>
                  </button>
                ))}
              </div>
              {selectedColor && (
                <p className="text-sm text-[#FF1493] mt-3 font-bold">
                   Selected: {selectedColor}
                </p>
              )}
            </div>

            {/* Features */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-sm font-bold text-[#1A3A8A] mb-2">Key Features</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-600">• Premium quality materials</li>
                <li className="text-sm text-gray-600">• Certified safety standards</li>
                <li className="text-sm text-gray-600">• Durable and long-lasting</li>
                <li className="text-sm text-gray-600">• Available in multiple colors</li>
              </ul>
            </div>

            {/* Price & Action */}
            <div className="flex flex-col gap-4">
              <p className="text-lg font-bold text-[#FF1493]">📞 Call for Best Price</p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleGetQuote}
                  className="flex-1 bg-[#FFD700] text-[#1A3A8A] px-6 py-3 rounded-full font-bold hover:bg-[#1A3A8A] hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <FaWhatsapp /> Get Quote
                </button>
                <a
                  href="tel:+265992144826"
                  className="flex-1 border-2 border-[#1A3A8A] text-[#1A3A8A] px-6 py-3 rounded-full font-bold hover:bg-[#1A3A8A] hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <i className="fas fa-phone"></i> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectiveWearModal;