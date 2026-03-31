import ProjectCard from '@/components/ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      title: 'Logistics Hub Expansion',
      category: 'Logistics',
      description: 'Development of a 10,000 sqm logistics center with advanced automation systems.',
      status: 'In Progress',
      image: ''
    },
    {
      title: 'Fleet Modernization Program',
      category: 'Transport',
      description: 'Investment in 50 new vehicles with GPS tracking and real-time monitoring.',
      status: 'Completed',
      image: ''
    },
    {
      title: 'Luxury Tourism Platform',
      category: 'Tourism',
      description: 'Digital platform for premium travel experiences and concierge services.',
      status: 'Launched',
      image: ''
    },
    {
      title: 'Commodities Trading Desk',
      category: 'Trading',
      description: 'Expansion of trading operations into new international markets.',
      status: 'In Progress',
      image: ''
    },
    {
      title: 'Digital Transformation Suite',
      category: 'Digital Services',
      description: 'Enterprise software solutions for business process automation.',
      status: 'Completed',
      image: ''
    },
    {
      title: 'Blockchain Investment Fund',
      category: 'Crypto',
      description: 'Strategic investment vehicle for blockchain and crypto assets.',
      status: 'Active',
      image: ''
    },
    {
      title: 'Green Logistics Initiative',
      category: 'Logistics',
      description: 'Sustainable transportation solutions with electric vehicle fleet.',
      status: 'Planned',
      image: ''
    },
    {
      title: 'Regional Distribution Network',
      category: 'Transport',
      description: 'Expansion of distribution centers across key locations.',
      status: 'In Progress',
      image: ''
    },
    {
      title: 'Business Intelligence Platform',
      category: 'Digital Services',
      description: 'Data analytics platform for business insights.',
      status: 'Completed',
      image: ''
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-3xl">
            Explore our diverse portfolio of projects and investments across all business sectors.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Growth Metrics */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-8">Portfolio Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-gray-600">Planned Initiatives</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;