import Image from 'next/image';
import { FiAward, FiUsers, FiTrendingUp, FiGlobe } from 'react-icons/fi';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: FiAward },
    { label: 'Business Sectors', value: '6', icon: FiGlobe },
    { label: 'Projects Completed', value: '50+', icon: FiTrendingUp },
    { label: 'Team Members', value: '100+', icon: FiUsers },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Go Baraka Sarl</h1>
          <p className="text-xl max-w-3xl">
            A diversified business group committed to excellence, innovation, and sustainable growth across multiple sectors.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-secondary-light p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg">
                To deliver exceptional value to our investors and stakeholders by building and managing a diversified portfolio of businesses that leverage innovation, operational excellence, and strategic partnerships.
              </p>
            </div>
            <div className="bg-secondary-light p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg">
                To become a leading diversified business group in Africa, recognized for our commitment to excellence, innovation, and sustainable growth across all our business sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-dark mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-dark mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with the highest ethical standards, transparency, and accountability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-dark mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek new ways to improve and stay ahead through technology and creative thinking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-dark mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, delivering quality results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;