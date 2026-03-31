import Image from 'next/image';
import { FiTruck, FiPackage, FiGlobe, FiTrendingUp } from 'react-icons/fi';

const Logistics = () => {
  const services = [
    {
      icon: <FiPackage className="w-8 h-8 text-primary" />,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain solutions optimized for efficiency and cost-effectiveness.'
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-primary" />,
      title: 'International Freight',
      description: 'Air, sea, and land freight services connecting businesses across continents.'
    },
    {
      icon: <FiTruck className="w-8 h-8 text-primary" />,
      title: 'Last Mile Delivery',
      description: 'Reliable and timely delivery services for the final leg of transportation.'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-primary" />,
      title: 'Warehousing',
      description: 'Modern warehousing facilities with advanced inventory management systems.'
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Logistics</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive logistics solutions powered by technology and operational excellence.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Moving Business Forward</h2>
              <p className="text-gray-700 mb-4">
                Our logistics division provides end-to-end supply chain solutions that help businesses optimize their operations, reduce costs, and improve efficiency.
              </p>
              <p className="text-gray-700">
                With advanced tracking systems, strategic warehouse locations, and a dedicated team of logistics experts, we ensure your goods move seamlessly from origin to destination.
              </p>
            </div>
            <div className="bg-secondary-light p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-primary-dark mb-4">Key Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Real-time tracking and visibility</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Strategic warehouse network</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Customs clearance expertise</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Scalable solutions for growing businesses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">
            Our Logistics Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Potential */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">Growth Potential</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The logistics sector in Africa is experiencing rapid growth. With strategic investments in technology and infrastructure, we're positioned to capture significant market share and deliver strong returns for investors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Logistics;