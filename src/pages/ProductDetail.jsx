import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaPhone, FaTruck, FaShieldAlt } from 'react-icons/fa';
import { getProductItem } from '../data/products';

const ProductDetail = () => {
  const { categoryId, productId } = useParams();
  const product = getProductItem(categoryId, productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1A3A8A]">Product not found</h2>
          <Link to="/#products" className="text-[#FFD700] hover:underline mt-4 inline-block">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button - FIXED */}
        <Link 
          to={`/category/${categoryId}`} 
          className="inline-flex items-center gap-2 text-[#1A3A8A] hover:text-[#FFD700] transition-colors mb-8 font-bold"
        >
          <FaArrowLeft /> Back to {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
        </Link>

        {/* Product Detail */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-80 lg:h-auto">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/600x400/1A3A8A/FFD700?text=${product.name}`;
                }}
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                  {product.stock}
                </span>
              </div>
              <h1 className="text-4xl font-black text-[#1A3A8A] mb-2">{product.name}</h1>
              <p className="text-gray-500 mb-4">Brand: {product.brand}</p>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-2xl font-bold text-[#1A3A8A]">{product.price}</p>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-[#1A3A8A] mb-2">Specifications</h3>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <FaCheckCircle className="text-[#FFD700]" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="/#repairForm" 
                  className="bg-[#FFD700] text-[#1A3A8A] px-8 py-3 rounded-full font-bold hover:bg-[#1A3A8A] hover:text-white hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
                >
                  Get Quote
                </a>
                <a 
                  href="tel:+265992144826" 
                  className="border-2 border-[#1A3A8A] text-[#1A3A8A] px-8 py-3 rounded-full font-bold hover:bg-[#1A3A8A] hover:text-white hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
                >
                  <FaPhone /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
            <div className="bg-[#FFD700]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTruck className="text-2xl text-[#1A3A8A]" />
            </div>
            <h3 className="font-bold text-[#1A3A8A]">Free Delivery</h3>
            <p className="text-sm text-gray-500">On bulk orders</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
            <div className="bg-[#FFD700]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-2xl text-[#1A3A8A]" />
            </div>
            <h3 className="font-bold text-[#1A3A8A]">100% Genuine</h3>
            <p className="text-sm text-gray-500">Original products</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
            <div className="bg-[#FFD700]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-2xl text-[#1A3A8A]" />
            </div>
            <h3 className="font-bold text-[#1A3A8A]">Expert Support</h3>
            <p className="text-sm text-gray-500">Call us for advice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;