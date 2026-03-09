export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 p-6 transform hover:scale-105">
      {/* Icon Container */}
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>

      {/* Title */}
      <h3 className="font-poppins text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="font-inter text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
