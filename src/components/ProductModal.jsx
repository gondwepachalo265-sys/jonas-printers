import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaWhatsapp, FaPhone, FaCheckCircle } from 'react-icons/fa';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const handleGetQuote = () => {
    const message = `Hi Jonas Printers,\n\nI'm interested in getting more information about:\n\n📦 Product: ${product.name}\n👤 Name: [Your Name]\n📞 Phone: [Your Phone]\n\nPlease contact me with pricing and availability.`;
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
            <div className="mb-2">
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                In Stock
              </span>
            </div>
            <h2 className="text-3xl font-black text-[#1A3A8A] mb-2">{product.name}</h2>
            <p className="text-gray-500 mb-4">Category: {product.id.charAt(0).toUpperCase() + product.id.slice(1)}</p>

            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-2xl font-bold text-[#1A3A8A]">Call for Best Price</p>
            </div>

            {/* Features */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-sm font-bold text-[#1A3A8A] mb-2"> Key Features</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-600">• Premium quality products</li>
                <li className="text-sm text-gray-600">• Available in multiple brands</li>
                <li className="text-sm text-gray-600">• Durable and reliable</li>
                <li className="text-sm text-gray-600">• Competitive pricing</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Link
                to={`/category/${product.id}`}
                onClick={onClose}
                className="w-full bg-[#FFD700] text-[#1A3A8A] px-6 py-3 rounded-full font-bold hover:bg-[#1A3A8A] hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                View All {product.name}
              </Link>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleGetQuote}
                  className="flex-1 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <FaWhatsapp /> Get Quote
                </button>
                <a
                  href="tel:+265992144826"
                  className="flex-1 border-2 border-[#1A3A8A] text-[#1A3A8A] px-6 py-3 rounded-full font-bold hover:bg-[#1A3A8A] hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <FaPhone /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;