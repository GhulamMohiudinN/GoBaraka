import { FiCpu, FiTrendingUp, FiShield, FiGlobe } from 'react-icons/fi';

const Crypto = () => {
  const initiatives = [
    {
      icon: <FiTrendingUp className="w-8 h-8 text-primary" />,
      title: 'Investment Strategy',
      description: 'Strategic investments in promising blockchain projects and cryptocurrencies.'
    },
    {
      icon: <FiShield className="w-8 h-8 text-primary" />,
      title: 'Risk Management',
      description: 'Sophisticated risk assessment and portfolio diversification strategies.'
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-primary" />,
      title: 'Global Partnerships',
      description: 'Collaborations with leading blockchain innovators worldwide.'
    },
    {
      icon: <FiCpu className="w-8 h-8 text-primary" />,
      title: 'Technology Research',
      description: 'Continuous research into emerging blockchain technologies and applications.'
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Crypto & Innovation</h1>
          <p className="text-xl max-w-3xl">
            Exploring the future of finance through blockchain technology and digital assets.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">The Future of Finance</h2>
              <p className="text-gray-700 mb-4">
                Our crypto and innovation division focuses on identifying and investing in transformative blockchain technologies that will shape the future of finance.
              </p>
              <p className="text-gray-700">
                We combine deep industry expertise with rigorous analysis to make informed investment decisions in the rapidly evolving crypto space.
              </p>
            </div>
            <div className="bg-secondary-light p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-primary-dark mb-4">Investment Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Established cryptocurrencies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>DeFi platforms</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>NFT marketplaces</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Blockchain infrastructure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">
            Our Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{initiative.icon}</div>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">{initiative.title}</h3>
                <p className="text-gray-600 text-sm">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Note */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-primary-dark text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Investment Approach</h2>
            <p className="text-gray-300 mb-4">
              We take a disciplined approach to crypto investments, focusing on long-term value creation while managing risk through diversification and strategic allocation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="border border-gray-600 rounded-lg p-3 text-center">
                <div className="text-xl font-bold">Research-Driven</div>
                <div className="text-sm text-gray-400">In-depth analysis before any investment</div>
              </div>
              <div className="border border-gray-600 rounded-lg p-3 text-center">
                <div className="text-xl font-bold">Diversified</div>
                <div className="text-sm text-gray-400">Spreading risk across multiple assets</div>
              </div>
              <div className="border border-gray-600 rounded-lg p-3 text-center">
                <div className="text-xl font-bold">Long-Term Focus</div>
                <div className="text-sm text-gray-400">Patient capital for sustainable growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crypto;