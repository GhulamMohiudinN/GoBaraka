'use client';

import { useState } from 'react';
import { FiExternalLink, FiEye } from 'react-icons/fi';

const ProjectCard = ({ title, category, description, image, status, isVisible, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {image ? (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 flex items-center justify-center ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex gap-4">
                <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <FiEye className="w-5 h-5 text-white" />
                </button>
                <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <FiExternalLink className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            <span className="text-white text-5xl font-bold opacity-50">{title.charAt(0)}</span>
          </div>
        )}
        
        {/* Status Badge */}
        {status && (
          <span className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold rounded-full shadow-lg z-10">
            {status}
          </span>
        )}
        
        {/* Category Badge */}
        <span className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-blue-600 text-xs font-semibold rounded-full shadow-lg z-10">
          {category}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Read More Link */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300 group/btn">
            View Project Details
            <FiExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
      
      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};

export default ProjectCard;