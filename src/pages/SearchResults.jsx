import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { productsData } from '../data/products';
import usePageTitle from '../hooks/usePageTitle';

const SearchResults = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  usePageTitle('Search Results');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    setSearchQuery(query);

    if (query.trim()) {
      const found = [];
      Object.keys(productsData).forEach(categoryId => {
        const category = productsData[categoryId];
        if (category.items) {
          category.items.forEach(item => {
            if (
              item.name.toLowerCase().includes(query.toLowerCase()) ||
              (item.brand && item.brand.toLowerCase().includes(query.toLowerCase())) ||
              category.name.toLowerCase().includes(query.toLowerCase())
            ) {
              found.push({
                ...item,
                categoryId: categoryId,
                categoryName: category.name
              });
            }
          });
        }
      });
      setResults(found);
    } else {
      setResults([]);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Link 
          to="/#products" 
          className="inline-flex items-center gap-2 text-[#1A3A8A] hover:text-[#FFD700] transition-colors mb-8 font-bold group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Products
        </Link>

        {/* Search Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaSearch className="text-3xl text-[#FFD700]" />
            <h1 className="text-4xl md:text-5xl font-black text-[#1A3A8A]">
              Search Results
            </h1>
          </div>
          <p className="text-gray-600">
            {results.length > 0 ? (
              <>Found <span className="font-bold text-[#FFD700]">{results.length}</span> results for "<span className="font-bold">{searchQuery}</span>"</>
            ) : (
              <>No results found for "<span className="font-bold">{searchQuery}</span>"</>
            )}
          </p>
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.categoryId}/${item.id}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 group"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/1A3A8A/FFD700?text=${item.name}`;
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-[#FFD700] font-bold">{item.categoryName}</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                      {item.stock || 'In Stock'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A3A8A] group-hover:text-[#FFD700] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Brand: {item.brand || 'Various'}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {item.specs && item.specs.slice(0, 2).map((spec, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[#1A3A8A] font-bold">{item.price || 'Call for Price'}</span>
                    <span className="text-[#FFD700] text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-[#1A3A8A] mb-2">No Products Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any products matching "<span className="font-bold">{searchQuery}</span>"
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/#products" 
                className="bg-[#FFD700] text-[#1A3A8A] px-6 py-2 rounded-full font-bold hover:bg-[#1A3A8A] hover:text-white transition-all duration-300"
              >
                Browse All Products
              </Link>
              <Link 
                to="/#contact" 
                className="border-2 border-[#1A3A8A] text-[#1A3A8A] px-6 py-2 rounded-full font-bold hover:bg-[#1A3A8A] hover:text-white transition-all duration-300"
              >
                Contact Us for Help
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;