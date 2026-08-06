import { FaUsers, FaTrophy, FaHandshake, FaClock } from 'react-icons/fa';
import usePageTitle from '../hooks/usePageTitle';

const About = () => {
  // Set page title
  usePageTitle('About Us - Our Story & Values');

  const values = [
    { icon: FaUsers, title: 'Customer First', desc: 'Your satisfaction is our priority' },
    { icon: FaTrophy, title: 'Quality Service', desc: 'We use genuine parts and professional tools' },
    { icon: FaHandshake, title: 'Trust & Honesty', desc: 'Transparent pricing and honest advice' },
    { icon: FaClock, title: 'Fast Turnaround', desc: 'Most repairs done within 24 hours' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-black text-[#1A3A8A] text-center mb-6">
          About <span className="text-[#FFD700]">Us</span>
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Your trusted partner for printers, laptops, and office solutions since 2014
        </p>

        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#1A3A8A] mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Jonas Printers Solutions & General Dealers was founded in 2014 with a simple mission: to provide 
            reliable, affordable, and high-quality printing and office solutions to businesses and individuals 
            in Blantyre and across Malawi. From humble beginnings as a small repair shop, we've grown into 
            a trusted name in the industry, serving hundreds of satisfied customers.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Today, we specialize in HP printer repairs, laptop sales and repairs, and a wide range of office 
            supplies including toner, paper, cables, and accessories. Our team of experienced technicians 
            is dedicated to providing fast, reliable service with a smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {values.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <item.icon className="text-[#FFD700] text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-[#1A3A8A]">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;