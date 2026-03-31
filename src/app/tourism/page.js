import { FiGlobe, FiCamera, FiUsers, FiTrendingUp } from 'react-icons/fi';

const Tourism = () => {
  const experiences = [
    {
      title: 'Business Travel',
      description: 'Tailored travel solutions for corporate clients including VIP services and concierge support.'
    },
    {
      title: 'Luxury Tourism',
      description: 'Premium travel experiences to the most exclusive destinations worldwide.'
    },
    {
      title: 'Adventure Travel',
      description: 'Exciting adventure packages for thrill-seekers and outdoor enthusiasts.'
    },
    {
      title: 'Cultural Tours',
      description: 'Immersive cultural experiences exploring local traditions and heritage.'
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Tourism</h1>
          <p className="text-xl max-w-3xl">
            Creating unforgettable travel experiences for business and leisure travelers.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Your Journey Begins Here</h2>
              <p className="text-gray-700 mb-4">
                Our professional tourism division specializes in creating curated travel experiences that exceed expectations.
              </p>
              <p className="text-gray-700">
                From business travel arrangements to luxury vacations, we handle every detail to ensure a seamless and memorable journey.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary-light p-6 rounded-lg text-center">
                <FiGlobe className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-dark">50+</div>
                <div className="text-sm text-gray-600">Destinations</div>
              </div>
              <div className="bg-secondary-light p-6 rounded-lg text-center">
                <FiUsers className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-dark">10k+</div>
                <div className="text-sm text-gray-600">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">
            Travel Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <FiCamera className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary-dark mb-2">{exp.title}</h3>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Potential */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">Market Opportunity</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The tourism sector is poised for significant growth post-pandemic. Our strategic positioning and focus on quality service delivery position us to capture this growing market.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Tourism;