import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import OfferBanner from './components/OfferBanner';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const AdvancedServices = lazy(() => import('./pages/AdvancedServices'));
const ProtectiveWear = lazy(() => import('./pages/ProtectiveWear'));
const Logistics = lazy(() => import('./pages/Logistics'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const SearchResults = lazy(() => import('./pages/SearchResults'));  // 👈 ADDED
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-[#FFD700]/20 rounded-full animate-spin border-t-[#FFD700] mx-auto"></div>
      <p className="mt-4 text-[#1A3A8A] font-semibold">Loading...</p>
    </div>
  </div>
);

// Scroll to top when navigating
function ScrollToTopOnNavigate() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname, location.hash]);

  return null;
}

// Handle hash scrolling
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      setTimeout(scrollToElement, 100);
      setTimeout(scrollToElement, 300);
      setTimeout(scrollToElement, 600);
    }
  }, [location]);

  return null;
}

function AppContent() {
  const { darkMode } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <div className="sticky top-0 z-50">
          <Navbar />
          <OfferBanner />
        </div>
        <ScrollToTopOnNavigate />
        <ScrollToHash />
        
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/product/:categoryId/:productId" element={<ProductDetail />} />
            <Route path="/advanced-services" element={<AdvancedServices />} />
            <Route path="/protective-wear" element={<ProtectiveWear />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/search" element={<SearchResults />} />  {/* 👈 ADDED */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;