import { FiTrendingUp, FiPackage, FiGlobe, FiBarChart2 } from 'react-icons/fi';

const Trading = () => {
  const commodities = [
    {
      category: 'Agricultural Products',
      items: ['Grains', 'Coffee', 'Tea', 'Cotton']
    },
    {
      category: 'Metals & Minerals',
      items: ['Copper', 'Iron Ore', 'Gold', 'Silver']
    },
    {
      category: 'Consumer Goods',
      items: ['Electronics', 'Textiles', 'Household Items']
    },
    {
      category: 'Industrial Materials',
      items: ['Steel', 'Cement', 'Chemicals']
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Trading</h1>
          <p className="text-xl max-w-3xl">
            Strategic trading operations leveraging market expertise and strong partnerships.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Global Trading Expertise</h2>
              <p className="text-gray-700 mb-4">
                Our trading division focuses on sourcing and distributing high-quality commodities and goods across international markets.
              </p>
              <p className="text-gray-700">
                With strong relationships with suppliers and buyers worldwide, we facilitate seamless trade transactions that create value for all stakeholders.
              </p>
            </div>
            <div className="bg-secondary-light p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-primary-dark mb-4">Key Strengths</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Global supplier network</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Risk management expertise</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Quality assurance systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Logistics integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commodities */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">
            Trading Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commodities.map((commodity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <FiPackage className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-primary-dark mb-3">{commodity.category}</h3>
                <ul className="space-y-1">
                  {commodity.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Position */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">Market Position</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're strategically positioned to capitalize on growing trade corridors and emerging market opportunities in Africa and beyond.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Trading;