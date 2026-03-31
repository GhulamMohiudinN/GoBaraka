import { FiTruck, FiUsers, FiClock, FiTrendingUp } from 'react-icons/fi';

const Transport = () => {
  const fleet = [
    {
      type: 'Heavy Trucks',
      description: 'Long-haul transportation for bulk goods and heavy cargo',
      capacity: 'Up to 40 tons'
    },
    {
      type: 'Medium Vehicles',
      description: 'Regional distribution and inter-city transport',
      capacity: '5-15 tons'
    },
    {
      type: 'Light Vehicles',
      description: 'Last-mile delivery and urban logistics',
      capacity: 'Up to 3.5 tons'
    },
    {
      type: 'Specialized Fleet',
      description: 'Refrigerated and temperature-controlled transport',
      capacity: 'Custom solutions'
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transport</h1>
          <p className="text-xl max-w-3xl">
            Modern fleet management and transportation services ensuring reliable and timely delivery.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Moving Goods, Building Trust</h2>
              <p className="text-gray-700 mb-4">
                Our transport division operates a modern fleet of vehicles equipped with the latest tracking and safety technologies.
              </p>
              <p className="text-gray-700">
                We specialize in providing reliable transportation solutions for businesses across various industries, ensuring that goods reach their destination safely and on time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary-light p-4 rounded-lg text-center">
                <FiTruck className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-dark">50+</div>
                <div className="text-sm text-gray-600">Vehicles</div>
              </div>
              <div className="bg-secondary-light p-4 rounded-lg text-center">
                <FiUsers className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-dark">100+</div>
                <div className="text-sm text-gray-600">Drivers</div>
              </div>
              <div className="bg-secondary-light p-4 rounded-lg text-center">
                <FiClock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-dark">98%</div>
                <div className="text-sm text-gray-600">On-time Delivery</div>
              </div>
              <div className="bg-secondary-light p-4 rounded-lg text-center">
                <FiTrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-dark">30%</div>
                <div className="text-sm text-gray-600">Annual Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">
            Our Fleet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fleet.map((vehicle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">{vehicle.type}</h3>
                <p className="text-gray-600 mb-2">{vehicle.description}</p>
                <p className="text-sm text-primary font-semibold">Capacity: {vehicle.capacity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-4">Technology Integration</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
            We leverage cutting-edge technology to optimize routes, track shipments in real-time, and ensure maximum efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-primary font-bold text-xl mb-2">GPS Tracking</div>
              <p className="text-gray-600 text-sm">Real-time vehicle location and status monitoring</p>
            </div>
            <div className="text-center p-4">
              <div className="text-primary font-bold text-xl mb-2">Route Optimization</div>
              <p className="text-gray-600 text-sm">AI-powered route planning for efficiency</p>
            </div>
            <div className="text-center p-4">
              <div className="text-primary font-bold text-xl mb-2">Digital Documentation</div>
              <p className="text-gray-600 text-sm">Paperless operations for faster processing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transport;