import { FiCode, FiSmartphone, FiCloud, FiShield } from 'react-icons/fi';

const DigitalServices = () => {
  const services = [
    {
      icon: <FiCode className="w-8 h-8 text-primary" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.'
    },
    {
      icon: <FiSmartphone className="w-8 h-8 text-primary" />,
      title: 'Mobile Apps',
      description: 'iOS and Android applications for businesses and consumers.'
    },
    {
      icon: <FiCloud className="w-8 h-8 text-primary" />,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure, migration, and management services.'
    },
    {
      icon: <FiShield className="w-8 h-8 text-primary" />,
      title: 'Cybersecurity',
      description: 'Security audits, penetration testing, and protection systems.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Services</h1>
          <p className="text-xl max-w-3xl">
            Innovative digital solutions driving business transformation.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Powering Digital Transformation</h2>
              <p className="text-gray-700 mb-4">
                Our digital services division helps businesses leverage technology to improve operations, enhance customer experiences, and drive growth.
              </p>
              <p className="text-gray-700">
                From custom software development to digital strategy consulting, we provide comprehensive solutions that deliver measurable results.
              </p>
            </div>
            <div className="bg-secondary-light p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-primary-dark mb-4">Our Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Agile development methodology</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>User-centered design</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Scalable architectures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Continuous support & maintenance</span>
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
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-4">Technology Stack</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
            We work with cutting-edge technologies to deliver robust, scalable, and future-proof solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'MongoDB', 'PostgreSQL', 'Tailwind'].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-secondary-light text-primary-dark rounded-full text-sm font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalServices;