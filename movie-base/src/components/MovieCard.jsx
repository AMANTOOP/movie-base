const MovieCard = ({ title, subtitle, img }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition">
      <img src={`${img}`} alt={title} className="w-full h-40 object-cover" />
      <div className="p-2">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
