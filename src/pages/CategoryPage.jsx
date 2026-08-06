import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { productsData } from '../data/products';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = productsData[categoryId];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1A3A8A]">Category not found</h2>
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
          to="/#products" 
          className="inline-flex items-center gap-2 text-[#1A3A8A] hover:text-[#FFD700] transition-colors mb-8 font-bold"
        >
          <FaArrowLeft /> Back to Products
        </Link>

        {/* Category Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-black text-[#1A3A8A] flex items-center gap-4">
            <span className="text-6xl">{category.icon}</span>
            {category.name}
          </h1>
          <p className="text-gray-600 text-lg mt-2">{category.description}</p>
          <p className="text-sm text-gray-400 mt-1">{category.items.length} products available</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.items.map((item) => (
            <Link 
              key={item.id}
              to={`/product/${categoryId}/${item.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/1A3A8A/FFD700?text=${item.name}`;
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#1A3A8A]">{item.name}</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    {item.stock}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">Brand: {item.brand}</p>
                <p className="text-[#1A3A8A] font-bold">{item.price}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {item.specs.slice(0, 2).map((spec, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {spec}
                    </span>
                  ))}
                  {item.specs.length > 2 && (
                    <span className="text-xs text-gray-400">+{item.specs.length - 2} more</span>
                  )}
                </div>
                <span className="inline-block mt-4 text-sm text-[#FFD700] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;