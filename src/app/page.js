'use client';

import Hero from '@/components/Hero';
import SectorCard from '@/components/SectorCard';
import { 
  FiTruck, 
  FiBox, 
  FiGlobe, 
  FiShoppingBag, 
  FiCode, 
  FiCpu,
  FiMapPin
} from 'react-icons/fi';

const sectors = [
  {
    title: 'Logistics',
    description: 'Comprehensive logistics solutions for businesses across Africa and beyond. We provide end-to-end supply chain management with cutting-edge technology.',
    icon: <FiBox className="w-6 h-6 text-white" />,
    href: '/logistics',
    color: '#002B5C'
  },
  {
    title: 'Transport',
    description: 'Modern fleet management and transportation services ensuring reliable and timely delivery of goods across the region.',
    icon: <FiTruck className="w-6 h-6 text-white" />,
    href: '/transport',
    color: '#003D7A'
  },
  {
    title: 'Professional Tourism',
    description: 'Curated travel experiences for business and leisure travelers. We create memorable journeys with exceptional service.',
    icon: <FiGlobe className="w-6 h-6 text-white" />,
    href: '/tourism',
    color: '#0056A0'
  },
  {
    title: 'Trading',
    description: 'Strategic trading operations in commodities and goods, leveraging strong market relationships and expertise.',
    icon: <FiShoppingBag className="w-6 h-6 text-white" />,
    href: '/trading',
    color: '#002B5C'
  },
  {
    title: 'Digital Services',
    description: 'Innovative digital solutions including web development, IT consulting, and digital transformation services.',
    icon: <FiCode className="w-6 h-6 text-white" />,
    href: '/digital-services',
    color: '#003D7A'
  },
  {
    title: 'Crypto / Innovation',
    description: 'Exploring the future of finance through blockchain technology and cryptocurrency investments.',
    icon: <FiCpu className="w-6 h-6 text-white" />,
    href: '/crypto',
    color: '#0056A0'
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Sectors Overview */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Business Sectors</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We operate across six key sectors, delivering excellence and driving growth in each vertical.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <SectorCard key={index} {...sector} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Go Baraka Sarl</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Partner with a business group committed to excellence and sustainable growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Diversified Portfolio</h3>
              <p className="text-gray-600">
                Multiple business verticals providing balanced risk and multiple growth opportunities
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
              <p className="text-gray-600">
                Embracing technology and innovation across all our business sectors
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Potential</h3>
              <p className="text-gray-600">
                Scalable business model designed for sustainable long-term growth
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}