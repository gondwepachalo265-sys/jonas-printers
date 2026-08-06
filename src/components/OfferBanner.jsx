import { useState, useEffect } from 'react';
import { 
  FaTag, 
  FaGift, 
  FaTruck, 
  FaPercent, 
  FaArrowRight, 
  FaClock,
  FaStar,
  FaFire
} from 'react-icons/fa';

const OfferBanner = () => {
  const offers = [
    { 
      id: 1, 
      icon: FaPercent, 
      title: '10% OFF',
      text: 'on all toner cartridges!', 
      subtext: 'Use code: TONER10',
      bg: 'from-[#1A3A8A] via-[#1A3A8A] to-[#FF1493]',
      emoji: '🎉'
    },
    { 
      id: 2, 
      icon: FaTruck, 
      title: 'FREE DELIVERY',
      text: 'on orders over K50,000!', 
      subtext: 'Within Blantyre City',
      bg: 'from-[#1A3A8A] via-[#FF1493] to-[#1A3A8A]',
      emoji: '🚚'
    },
    { 
      id: 3, 
      icon: FaGift, 
      title: 'BUY 2 GET 1',
      text: 'Buy 2 printers, get free toner!', 
      subtext: 'Limited time offer',
      bg: 'from-[#FF1493] via-[#1A3A8A] to-[#FF1493]',
      emoji: '🎁'
    },
    { 
      id: 4, 
      icon: FaFire, 
      title: 'FLASH SALE',
      text: 'Laptop repair from K15,000!', 
      subtext: 'Includes free diagnostic',
      bg: 'from-[#1A3A8A] via-[#FFD700] to-[#FF1493]',
      emoji: '🔥'
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % offers.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextOffer = () => {
    setCurrent((prev) => (prev + 1) % offers.length);
  };

  const prevOffer = () => {
    setCurrent((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const currentOffer = offers[current];

  return (
    <div 
      className={`relative overflow-hidden bg-gradient-to-r ${currentOffer.bg} text-white shadow-2xl`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-white/10 animate-[spin_20s_linear_infinite]" style={{ transform: 'rotate(0deg)' }}></div>
        </div>
      </div>

      {/* Floating Emojis */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/10 text-4xl animate-bounce"
            style={{
              left: `${10 + i * 20}%`,
              top: `${10 + (i * 7) % 80}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i % 2}s`
            }}
          >
            {currentOffer.emoji}
          </div>
        ))}
      </div>

      {/* Gold Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700]/30"></div>

      <div className="container mx-auto px-4 py-2 md:py-3 relative z-10">
        <div className="flex items-center justify-between gap-4">
          {/* Left Arrow */}
          <button 
            onClick={prevOffer}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFD700]/20 hover:text-[#FFD700] transition-all duration-300 text-white text-2xl hover:scale-110 backdrop-blur-sm border border-white/10"
            aria-label="Previous offer"
          >
            ‹
          </button>

          {/* Content */}
          <div className="flex-1 flex items-center justify-center gap-3 md:gap-6 overflow-hidden">
            {/* Icon with pulse */}
            <div className="hidden sm:flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#FFD700]/20 backdrop-blur-sm animate-pulse border border-[#FFD700]/30">
              <currentOffer.icon className="text-xl md:text-3xl text-[#FFD700]" />
            </div>

            {/* Text Content */}
            <div className="text-center flex-1">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="text-xs md:text-sm font-bold bg-[#FFD700] text-[#1A3A8A] px-2 md:px-3 py-0.5 md:py-1 rounded-full backdrop-blur-sm animate-bounce">
                  {currentOffer.title}
                </span>
                <span className="text-sm md:text-lg font-bold text-white">
                  {currentOffer.text}
                </span>
              </div>
              <p className="text-xs md:text-sm text-white/80 flex items-center justify-center gap-2">
                <FaClock className="text-xs text-[#FFD700]" />
                {currentOffer.subtext}
                <span className="hidden md:inline-block ml-2 text-white/30">•</span>
                <span className="hidden md:inline-block text-white/50 text-xs">Don't miss out!</span>
              </p>
            </div>

            {/* CTA Button */}
            <a 
              href="#products" 
              className="hidden md:flex items-center gap-2 bg-[#FFD700] text-[#1A3A8A] hover:bg-white transition-all duration-300 px-4 py-1.5 rounded-full text-sm font-bold hover:scale-105 shadow-lg"
            >
              Shop Now <FaArrowRight className="text-xs" />
            </a>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextOffer}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFD700]/20 hover:text-[#FFD700] transition-all duration-300 text-white text-2xl hover:scale-110 backdrop-blur-sm border border-white/10"
            aria-label="Next offer"
          >
            ›
          </button>

          {/* Mobile Arrows */}
          <div className="flex md:hidden gap-1">
            <button 
              onClick={prevOffer}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-[#FFD700]/20 transition-all duration-300 text-white text-lg"
            >
              ‹
            </button>
            <button 
              onClick={nextOffer}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-[#FFD700]/20 transition-all duration-300 text-white text-lg"
            >
              ›
            </button>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-1.5 mt-1.5">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'bg-[#FFD700] w-8' 
                  : 'bg-white/30 w-4 hover:bg-white/50'
              }`}
              aria-label={`Go to offer ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;