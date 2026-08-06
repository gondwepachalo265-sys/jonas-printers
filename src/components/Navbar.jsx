import { useState } from 'react';
import { FaPhone, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { productsData } from '../data/products';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

  // Handle search - goes to search results page
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  // Live search as user types
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 1) {
      const results = [];
      Object.keys(productsData).forEach(categoryId => {
        const category = productsData[categoryId];
        if (category.items) {
          category.items.forEach(item => {
            if (
              item.name.toLowerCase().includes(query.toLowerCase()) ||
              (item.brand && item.brand.toLowerCase().includes(query.toLowerCase())) ||
              category.name.toLowerCase().includes(query.toLowerCase())
            ) {
              results.push({
                ...item,
                categoryId: categoryId,
                categoryName: category.name
              });
            }
          });
        }
      });
      setSearchResults(results.slice(0, 10));
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (result) => {
    navigate(`/product/${result.categoryId}/${result.id}`);
    setSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = `/#${targetId}`;
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Repairs', href: '#repairs' },
    { name: 'Repair Wizard', href: '#repairWizard' },
    { name: 'Advanced Services', href: '/advanced-services', isLink: true },
    { name: 'Protective Wear', href: '/protective-wear', isLink: true },
    { name: 'Logistics', href: '/logistics', isLink: true },
    { name: 'About', href: '/about', isLink: true },
    { name: 'Blog', href: '/blog', isLink: true },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      darkMode 
        ? 'bg-gray-900/80 backdrop-blur-xl border-b border-white/5' 
        : 'bg-[#1A3A8A]/80 backdrop-blur-xl border-b border-white/5'
    } shadow-xl`}>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo - BIGGER */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFD700] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
              <div className="w-9 h-9 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center relative z-10 border-2 border-[#FFD700]/30 group-hover:border-[#FFD700] transition-all duration-300 overflow-hidden">
                <img 
                  src={logo} 
                  alt="JONAS PRINTERS" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="leading-tight hidden sm:block">
              <p className="text-sm md:text-lg lg:text-xl font-black tracking-wide">
                <span className="text-[#FFD700]">JONAS</span>{' '}
                <span className="text-white">PRINTERS</span>
              </p>
              <p className="text-[8px] md:text-[10px] lg:text-[11px] font-bold text-[#FFD700]/70 tracking-[0.15em] uppercase">
                Solutions &amp; General Dealers
              </p>
            </div>
          </Link>

          {/* Spacer with MORE space */}
          <div className="flex-1 min-w-[20px]"></div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              link.isLink ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative px-1.5 xl:px-2 py-1 text-white/70 hover:text-[#FFD700] font-medium text-[9px] xl:text-[10px] 2xl:text-[11px] uppercase tracking-wider transition-all duration-300 group whitespace-nowrap"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#FFD700] rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ width: '40%' }}></span>
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href.replace('#', ''))}
                  className="relative px-1.5 xl:px-2 py-1 text-white/70 hover:text-[#FFD700] font-medium text-[9px] xl:text-[10px] 2xl:text-[11px] uppercase tracking-wider transition-all duration-300 group whitespace-nowrap"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#FFD700] rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ width: '40%' }}></span>
                </a>
              )
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-0.5 md:gap-1.5">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative p-1.5 rounded-full transition-all duration-500 z-10 ${
                  searchOpen 
                    ? 'bg-[#FFD700] text-[#1A3A8A] shadow-lg shadow-[#FFD700]/50 scale-110' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Search"
              >
                <FaSearch className={`text-xs md:text-sm transition-all duration-500 ${searchOpen ? 'rotate-90' : ''}`} />
                {!searchOpen && (
                  <>
                    <span className="absolute inset-0 rounded-full border-2 border-[#FFD700]/40 animate-ping"></span>
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FFD700] rounded-full animate-pulse shadow-lg shadow-[#FFD700]/50"></span>
                  </>
                )}
              </button>
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun className="text-[#FFD700]" /> : <FaMoon className="text-xs md:text-sm" />}
            </button>

            <a
              href="tel:+265992144826"
              className="hidden sm:flex items-center gap-1 bg-gradient-to-r from-[#FFD700] to-[#FFD700]/90 text-[#1A3A8A] px-2 md:px-2.5 py-1 rounded-full font-bold text-[9px] md:text-[10px] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FFD700]/30 whitespace-nowrap"
            >
              <FaPhone className="text-[8px] md:text-[9px]" />
              <span className="hidden xl:inline">Call Now</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1.5 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
          searchOpen ? 'max-h-96 opacity-100 pb-3' : 'max-h-0 opacity-0'
        }`}>
          <form onSubmit={handleSearch} className="relative">
            <div className="relative z-10 flex items-center bg-white/5 backdrop-blur-md border-2 border-[#FFD700]/30 rounded-2xl overflow-hidden group focus-within:border-[#FFD700] focus-within:shadow-2xl focus-within:shadow-[#FFD700]/20 transition-all duration-500">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="🔍 Search printers, laptops, toners, cables..."
                className="w-full px-5 py-2.5 bg-transparent text-white placeholder-white/50 focus:outline-none text-sm pl-6"
                autoFocus={searchOpen}
              />
              <button
                type="submit"
                className="m-1 p-2 bg-gradient-to-r from-[#FFD700] to-[#FFD700]/80 text-[#1A3A8A] rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FFD700]/40"
              >
                <FaSearch className="text-xs" />
              </button>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden z-20 max-h-72 overflow-y-auto">
                {searchResults.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className="w-full text-left px-4 py-3 hover:bg-white/10 transition-colors flex items-center gap-3 border-b border-white/5 last:border-0"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                      <img 
                        src={result.image} 
                        alt={result.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/48/1A3A8A/FFD700?text=${result.name.charAt(0)}`;
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">{result.name}</p>
                      <p className="text-white/50 text-xs flex items-center gap-2">
                        <span>{result.categoryName}</span>
                        <span>•</span>
                        <span>{result.brand}</span>
                      </p>
                    </div>
                    <span className="text-[#FFD700] text-xs font-bold whitespace-nowrap">
                      View →
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* No Results */}
            {searchQuery.length > 1 && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden z-20">
                <div className="px-4 py-3 text-white/50 text-sm text-center">
                  <p>No products found for "{searchQuery}"</p>
                  <p className="text-xs text-white/30 mt-1">Press Enter to search all products</p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-2 border-t border-white/10 space-y-0.5">
            {navLinks.map((link) => (
              link.isLink ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium text-xs uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href.replace('#', ''));
                    setIsOpen(false);
                  }}
                  className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium text-xs uppercase tracking-wider"
                >
                  {link.name}
                </a>
              )
            ))}
            
            <div className="border-t border-white/5 my-1 pt-2">
              <a
                href="tel:+265992144826"
                className="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium text-xs"
              >
                <FaPhone className="text-[#FFD700]" />
                <span>Call Now: +265 99 214 4826</span>
              </a>
              <button
                onClick={() => {
                  toggleDarkMode();
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium text-xs"
              >
                {darkMode ? <FaSun className="text-[#FFD700]" /> : <FaMoon />}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;