import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-lg">
        <div className="relative inline-block">
          <div className="text-8xl font-black text-[#FFD700] mb-2">404</div>
          <div className="absolute -top-4 -right-8 text-5xl animate-bounce">
            <FaExclamationTriangle className="text-[#FF1493]" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-[#1A3A8A] mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-[#FFD700] text-[#1A3A8A] px-8 py-3 rounded-full font-bold hover:bg-[#1A3A8A] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            <FaHome /> Back to Home
          </Link>
          <Link 
            to="/#contact" 
            className="border-2 border-[#1A3A8A] text-[#1A3A8A] px-8 py-3 rounded-full font-bold hover:bg-[#1A3A8A] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            📞 Contact Us
          </Link>
        </div>

        {/* Helpful links */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">You might be looking for:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/" className="text-sm text-[#1A3A8A] hover:text-[#FFD700] transition-colors">Home</Link>
            <span className="text-gray-300">•</span>
            <Link to="/about" className="text-sm text-[#1A3A8A] hover:text-[#FFD700] transition-colors">About</Link>
            <span className="text-gray-300">•</span>
            <Link to="/advanced-services" className="text-sm text-[#1A3A8A] hover:text-[#FFD700] transition-colors">Services</Link>
            <span className="text-gray-300">•</span>
            <Link to="/logistics" className="text-sm text-[#1A3A8A] hover:text-[#FFD700] transition-colors">Logistics</Link>
            <span className="text-gray-300">•</span>
            <Link to="/protective-wear" className="text-sm text-[#1A3A8A] hover:text-[#FFD700] transition-colors">Protective Wear</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;