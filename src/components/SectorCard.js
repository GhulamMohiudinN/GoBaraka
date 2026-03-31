import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const SectorCard = ({ title, description, icon, href, color }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
          style={{ backgroundColor: color || '#002B5C' }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary-dark mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors"
        >
          Learn More
          <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default SectorCard;