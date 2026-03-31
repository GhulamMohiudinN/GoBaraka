const ProjectCard = ({ title, category, description, image, status }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-gray-200">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-light to-primary-dark">
            <span className="text-white text-4xl font-bold">{title.charAt(0)}</span>
          </div>
        )}
        {status && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
            {status}
          </span>
        )}
      </div>
      <div className="p-6">
        <span className="text-sm text-primary font-semibold uppercase tracking-wide">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-primary-dark mt-2 mb-3">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;