import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Pulse ring in brand color */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
      <a
        href="https://wa.me/265992144826"
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        style={{ width: '64px', height: '64px' }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-4xl" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;