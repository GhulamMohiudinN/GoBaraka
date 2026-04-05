'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const SectorCard = ({ title, description, icon, href, color, buttonText = 'Learn More' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="p-6 relative">
        {/* Icon Container */}
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
          style={{ backgroundColor: color || '#002B5C' }}
        >
          <div className="text-white text-2xl">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#002B5C] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Link */}
        <Link
          href={href}
          className="inline-flex items-center text-[#002B5C] font-semibold group/link transition-all duration-300"
        >
          <span className="border-b-2 border-transparent group-hover/link:border-[#002B5C] transition-all duration-300">
            {buttonText}
          </span>
          <FiArrowRight className="ml-2 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-px" />
        </Link>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#002B5C] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
      </div>
    </div>
  );
};

export default SectorCard;