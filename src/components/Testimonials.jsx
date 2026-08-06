import { FaStar, FaUser } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: 'John Banda',
      location: 'Blantyre',
      text: 'They fixed my HP printer in 2 hours! Excellent service and very professional.',
      rating: 5
    },
    {
      name: 'Sarah Mkandawire',
      location: 'Lilongwe',
      text: 'The best place to buy original toner and printer parts in Malawi. Highly recommend!',
      rating: 5
    },
    {
      name: 'Michael Phiri',
      location: 'Blantyre',
      text: 'My laptop was repaired within a day. Great customer service and fair prices.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#1A3A8A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            What Our <span className="text-[#FFD700]">Customers</span> Say
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Real reviews from real customers who trust us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#FFD700] p-3 rounded-full text-[#1A3A8A]">
                  <FaUser className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A3A8A]">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
              <div className="flex text-[#FFD700] mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;