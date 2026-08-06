import { useState, useEffect } from 'react';
import { FaPrint, FaLaptop, FaTools, FaArrowRight, FaArrowLeft, FaCheckCircle, FaStar } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

//  Initialize EmailJS with your Public Key
emailjs.init('UB7hgAVKR_nUsbfzv');

const RepairWizard = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [formData, setFormData] = useState({
    deviceType: '',
    issue: '',
    name: '',
    phone: '',
    email: ''
  });

  const printerIssues = [
    'Paper Jam',
    "Won't Turn On",
    'Print Quality Issues',
    'Paper Feed Problems',
    'Error Messages',
    'Network/Connection Issues',
    'Other'
  ];

  const laptopIssues = [
    "Won't Turn On",
    'Slow Performance',
    'Screen Problems',
    'Battery Issues',
    'Keyboard/Touchpad Not Working',
    'Software Issues',
    'Other'
  ];

  // Confetti animation on success
  useEffect(() => {
    if (submitted) {
      const colors = ['#FFD700', '#1A3A8A', '#FF1493', '#FF6B35', '#00C9A7'];
      const newConfetti = [];
      for (let i = 0; i < 50; i++) {
        newConfetti.push({
          id: i,
          x: Math.random() * 100,
          y: -10,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 10 + 5,
          speed: Math.random() * 3 + 2,
          rotation: Math.random() * 360,
          delay: Math.random() * 2
        });
      }
      setConfetti(newConfetti);
    }
  }, [submitted]);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const serviceID = 'service_116ybgq';
      const templateID = 'template_w1uqwbq'; 
      const templateParams = {
        from_name: formData.name || 'Test User',
        from_phone: formData.phone || '123456789',
        from_email: formData.email || 'test@example.com',
        device_type: formData.deviceType || 'Printer',
        issue: formData.issue || 'Paper Jam',
        message: `📋 NEW REPAIR REQUEST\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📧 Email: ${formData.email || 'Not provided'}\n\n🖥️ Device: ${formData.deviceType}\n🔧 Issue: ${formData.issue}\n\nPlease contact the customer to schedule the repair.`
      };

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams
      );

      console.log('✅ Success:', response);
      setSubmitted(true);
      setTimeout(() => {
        setStep(1);
        setFormData({
          deviceType: '',
          issue: '',
          name: '',
          phone: '',
          email: ''
        });
        setSubmitted(false);
        setConfetti([]);
      }, 6000);
    } catch (error) {
      console.error('❌ Error:', error);
      let errorMessage = 'Something went wrong. Please call us directly.';
      if (error.text) {
        errorMessage = error.text;
      } else if (error.message) {
        errorMessage = error.message;
      }
      alert(`❌ Error: ${errorMessage}\n\nPlease call us directly at +265 99 214 4826`);
    } finally {
      setLoading(false);
    }
  };

  const progress = ((step - 1) / 2) * 100;

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-gray-100 relative">
      {/* Confetti Container */}
      {submitted && confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute pointer-events-none"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            background: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animation: `confettiFall ${piece.speed}s ${piece.delay}s ease-in forwards`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            zIndex: 50
          }}
        />
      ))}

      {/* Header */}
      <div className="bg-gradient-to-r from-[#1A3A8A] via-[#1A3A8A] to-[#FF1493] p-6 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#FFD700] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#FF1493] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#FFD700] p-2 rounded-full animate-bounce">
              <FaTools className="text-[#1A3A8A] text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">Repair Wizard</h3>
              <p className="text-white/70 text-sm">Step {step} of 3</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  step >= num 
                    ? 'bg-[#FFD700] text-[#1A3A8A] scale-110 shadow-lg shadow-[#FFD700]/50' 
                    : 'bg-white/20 text-white'
                }`}
              >
                {step > num ? <FaCheckCircle className="text-[#1A3A8A]" /> : num}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 w-full bg-white/20 rounded-full h-2 relative z-10">
          <div 
            className="bg-[#FFD700] h-2 rounded-full transition-all duration-500 shadow-lg shadow-[#FFD700]/50"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Body */}
      <div className="p-8 min-h-[400px]">
        {/* Success Message - IMPRESSIVE VERSION */}
        {submitted && (
          <div className="relative">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 via-[#FF1493]/10 to-[#1A3A8A]/20 rounded-2xl blur-2xl animate-pulse"></div>
            
            <div className="relative bg-white/95 backdrop-blur-sm border-2 border-[#FFD700] rounded-2xl p-8 text-center shadow-2xl shadow-[#FFD700]/20 animate-fadeInUp">
              {/* Animated Success Icon with Ring */}
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#FFD700] rounded-full animate-ping opacity-25"></div>
                <div className="absolute inset-0 bg-[#FFD700] rounded-full animate-pulse opacity-50" style={{ animationDuration: '2s' }}></div>
                <div className="w-28 h-28 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-[#FFD700] shadow-2xl shadow-[#FFD700]/50 relative animate-bounceIn">
                  <svg className="w-14 h-14 text-[#1A3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Main Success Text with Animation */}
              <h3 className="font-black text-4xl text-[#1A3A8A] mb-2 animate-slideUp">
                🎉 Repair Request Sent!
              </h3>
              
              {/* Animated underline */}
              <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF1493] mx-auto rounded-full animate-pulse"></div>
              
              <p className="text-gray-600 text-lg mt-4 animate-slideUp delay-200">
                We'll contact you within <span className="font-bold text-[#FFD700]">30 minutes</span>
              </p>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6 animate-slideUp delay-300">
                <div className="bg-gradient-to-br from-[#1A3A8A]/5 to-[#FFD700]/5 rounded-xl p-4 border border-[#FFD700]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-2xl mb-1">📞</div>
                  <p className="text-xs text-gray-500">Call us directly</p>
                  <p className="text-sm font-bold text-[#1A3A8A]">+265 99 214 4826</p>
                </div>
                <div className="bg-gradient-to-br from-[#FFD700]/5 to-[#1A3A8A]/5 rounded-xl p-4 border border-[#FFD700]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-2xl mb-1">📍</div>
                  <p className="text-xs text-gray-500">Visit our showroom</p>
                  <p className="text-sm font-bold text-[#1A3A8A]">Kristwick Baulevard Mall</p>
                </div>
              </div>

              {/* Status Badge with Animation */}
              <div className="bg-gradient-to-r from-[#FFD700]/20 via-[#FFD700]/10 to-[#FFD700]/20 border-2 border-[#FFD700] rounded-xl p-4 mt-6 animate-pulse-slow">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#1A3A8A] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-[#1A3A8A] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-[#1A3A8A] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="text-sm text-[#1A3A8A] font-bold tracking-wide uppercase">
                    We're on it! 🚀
                  </span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#1A3A8A] rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                    <div className="w-2 h-2 bg-[#1A3A8A] rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
                    <div className="w-2 h-2 bg-[#1A3A8A] rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-slideUp delay-400">
                <button 
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      deviceType: '',
                      issue: '',
                      name: '',
                      phone: '',
                      email: ''
                    });
                    setSubmitted(false);
                    setConfetti([]);
                  }}
                  className="flex-1 bg-[#1A3A8A] text-white px-6 py-3 rounded-full font-bold hover:bg-[#FFD700] hover:text-[#1A3A8A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  🔄 Submit Another
                </button>
                <a 
                  href="#products" 
                  className="flex-1 bg-[#FFD700] text-[#1A3A8A] px-6 py-3 rounded-full font-bold hover:bg-[#1A3A8A] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-center"
                >
                  🛒 Browse Products
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Select Device */}
        {step === 1 && !submitted && (
          <div>
            <h2 className="text-3xl font-black text-[#1A3A8A] mb-2">What needs fixing?</h2>
            <p className="text-gray-500 mb-8">Select the type of device you need help with.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => {
                  setFormData({ ...formData, deviceType: 'Printer' });
                  handleNext();
                }}
                className="group p-8 rounded-2xl border-4 transition-all duration-300 hover:scale-105 bg-white hover:shadow-xl border-gray-200 hover:border-[#FFD700] hover:shadow-[#FFD700]/20"
              >
                <FaPrint className="text-6xl mx-auto mb-4 text-gray-400 group-hover:text-[#FFD700] transition-colors" />
                <h3 className="text-2xl font-bold text-[#1A3A8A]">Printer</h3>
                <p className="text-gray-500 text-sm">Laser, Inkjet, All-in-One</p>
              </button>

              <button
                onClick={() => {
                  setFormData({ ...formData, deviceType: 'Laptop' });
                  handleNext();
                }}
                className="group p-8 rounded-2xl border-4 transition-all duration-300 hover:scale-105 bg-white hover:shadow-xl border-gray-200 hover:border-[#FFD700] hover:shadow-[#FFD700]/20"
              >
                <FaLaptop className="text-6xl mx-auto mb-4 text-gray-400 group-hover:text-[#FFD700] transition-colors" />
                <h3 className="text-2xl font-bold text-[#1A3A8A]">Laptop</h3>
                <p className="text-gray-500 text-sm">Windows, Mac, Chromebook</p>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Issue */}
        {step === 2 && !submitted && (
          <div>
            <h2 className="text-3xl font-black text-[#1A3A8A] mb-2">What's the problem?</h2>
            <p className="text-gray-500 mb-8">Select the issue you're experiencing with your {formData.deviceType}.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(formData.deviceType === 'Printer' ? printerIssues : laptopIssues).map((issue) => (
                <button
                  key={issue}
                  onClick={() => {
                    setFormData({ ...formData, issue });
                    handleNext();
                  }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 text-left flex items-center gap-3 ${
                    formData.issue === issue 
                      ? 'border-[#FFD700] bg-[#FFD700]/10 shadow-lg shadow-[#FFD700]/20' 
                      : 'border-gray-200 hover:border-[#1A3A8A]'
                  }`}
                >
                  <FaCheckCircle className={`${formData.issue === issue ? 'text-[#FFD700]' : 'text-gray-300'}`} />
                  <span className="font-medium text-[#1A3A8A]">{issue}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Enter Details */}
        {step === 3 && !submitted && (
          <div>
            <h2 className="text-3xl font-black text-[#1A3A8A] mb-2">Almost done!</h2>
            <p className="text-gray-500 mb-8">Enter your details and we'll contact you within 30 minutes.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-bold text-[#1A3A8A] mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD700] focus:outline-none transition-colors focus:shadow-lg focus:shadow-[#FFD700]/20"
                    placeholder="your full name"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#1A3A8A] mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD700] focus:outline-none transition-colors focus:shadow-lg focus:shadow-[#FFD700]/20"
                    placeholder="+265 999 999 999"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-bold text-[#1A3A8A] mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD700] focus:outline-none transition-colors focus:shadow-lg focus:shadow-[#FFD700]/20"
                    placeholder="your email address"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#1A3A8A]/5 to-[#FF1493]/5 rounded-xl p-4 border border-[#FFD700]/20 hover:shadow-lg transition-all duration-300">
                <p className="text-sm text-gray-500 font-bold">🔍 Repair Summary</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="bg-[#1A3A8A] text-white px-4 py-1.5 rounded-full text-sm font-bold">
                    🖥️ {formData.deviceType || 'Not selected'}
                  </span>
                  <span className="bg-[#FFD700] text-[#1A3A8A] px-4 py-1.5 rounded-full text-sm font-bold">
                    🔧 {formData.issue || 'Not selected'}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1A3A8A] px-8 py-4 rounded-full font-bold text-lg hover:from-[#1A3A8A] hover:to-[#1A3A8A] hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-[#1A3A8A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  '🚀 Send Repair Request'
                )}
              </button>
            </form>
          </div>
        )}

        {/* Navigation Buttons */}
        {!submitted && (
          <div className="flex justify-between mt-8 pt-4 border-t border-gray-100">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="text-[#1A3A8A] font-bold hover:text-[#FFD700] transition-colors flex items-center gap-2 group"
              >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back
              </button>
            )}
            {step < 3 && (
              <button
                onClick={handleNext}
                className="ml-auto bg-[#1A3A8A] text-white px-8 py-2.5 rounded-full font-bold hover:bg-[#FFD700] hover:text-[#1A3A8A] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                Next Step <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(-10px) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(600px) rotate(720deg) scale(0);
            opacity: 0;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-bounceIn {
          animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out both;
        }

        .animate-slideUp.delay-200 {
          animation-delay: 0.2s;
        }

        .animate-slideUp.delay-300 {
          animation-delay: 0.3s;
        }

        .animate-slideUp.delay-400 {
          animation-delay: 0.4s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default RepairWizard;