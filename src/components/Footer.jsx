import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaLinkedin
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1A2437] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info with Circular LOGO */}
          <div>
            <a href="#top" className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFD700] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center relative z-10 border-2 border-[#FFD700]/30 group-hover:border-[#FFD700] transition-all duration-300 overflow-hidden">
                  <img 
                    src={logo} 
                    alt="JONAS PRINTERS" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="leading-tight">
                <p className="text-xl font-black tracking-wide">
                  <span className="text-[#FFD700]">JONAS</span>{' '}
                  <span className="text-white">PRINTERS</span>
                </p>
                <p className="text-[10px] font-bold text-[#FFD700] tracking-widest">
                  SOLUTIONS &amp; GENERAL DEALERS
                </p>
              </div>
            </a>
            <p className="text-white/70 text-sm mt-2">
              Your trusted partner for printers, laptops, and office solutions since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-[#FFD700] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-white/70 hover:text-[#FFD700] transition-colors">Services</a></li>
              <li><a href="/#products" className="text-white/70 hover:text-[#FFD700] transition-colors">Products</a></li>
              <li><a href="/#repairs" className="text-white/70 hover:text-[#FFD700] transition-colors">Repairs</a></li>
              <li><a href="/#contact" className="text-white/70 hover:text-[#FFD700] transition-colors">Contact</a></li>
              <li><Link to="/about" className="text-white/70 hover:text-[#FFD700] transition-colors">About</Link></li>
              <li><Link to="/logistics" className="text-white/70 hover:text-[#FFD700] transition-colors">Logistics</Link></li>
              <li><Link to="/protective-wear" className="text-white/70 hover:text-[#FFD700] transition-colors">Protective Wear</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-[#FFD700] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#FFD700]" />
                <span className="text-white/70 text-sm">Kristwick Baulevard Mall, Shop B6, Kamuzu Highway, Blantyre</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#FFD700]" />
                <span className="text-white/70">+265 99 214 4826 (MW)</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#FFD700]" />
                <span className="text-white/70">+27 84 465 3463 (SA)</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#FFD700]" />
                <span className="text-white/70">info@jonasprinters.com</span>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="text-xl font-bold text-[#FFD700] mb-4">Follow Us</h4>
            
            {/* Social Icons - With Real Links */}
            <div className="flex flex-wrap gap-3 mb-4">
              <a 
                href="https://facebook.com/jonasprinters" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#1877F2] hover:text-white transition-all duration-300 text-white hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a 
                href="https://instagram.com/jonasprinters" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#E4405F] hover:text-white transition-all duration-300 text-white hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="https://wa.me/265992144826" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 text-white hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a 
                href="https://youtube.com/@jonasprinters" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#FF0000] hover:text-white transition-all duration-300 text-white hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a 
                href="https://twitter.com/jonasprinters" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 text-white hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a 
                href="https://tiktok.com/@jonasprinters" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#000000] hover:text-white transition-all duration-300 text-white hover:scale-110"
                aria-label="TikTok"
              >
                <FaTiktok className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com/company/jonasprinters" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#0A66C2] hover:text-white transition-all duration-300 text-white hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>

            {/* Business Hours */}
            <div className="text-white/70 text-sm">
              <p>Mon - Fri: 8:00am - 5:00pm</p>
              <p>Sat: 8:00am - 1:00pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} JONAS PRINTERS SOLUTIONS AND GENERAL DEALERS. All rights reserved.</p>
          <p className="mt-1 text-white/30 text-xs">Kristwick Baulevard Mall, Shop B6, Kamuzu Highway, Blantyre</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;