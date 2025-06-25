import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../context/MovieContext';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const { selectedMovie, getMovieDetails, loading, error } = useMovie();

  useEffect(() => {
    getMovieDetails(imdbID);
  }, [imdbID]);

  if (loading) return 
      <div className="flex flex-col items-center my-10">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent mb-2"></div>
        <p className="text-gray-500">Loading...</p>
      </div>
    ;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!selectedMovie) return null;

  const m = selectedMovie;

  return (
    <div className="p-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 bg-[#CEE2F2] min-h-screen min-w-[300px]">
      <img
        src={m.Poster !== 'N/A' ? m.Poster : '/placeholder.jpg'}
        alt={m.Title}
        className="w-full md:w-1/3 object-cover rounded shadow-md transform transition duration-300 hover:scale-105"
      />

      <div className="flex-1 space-y-4">
        <h1 className="text-4xl font-bold">{m.Title} <span className="text-gray-500">({m.Year})</span></h1>
        <p className="text-sm text-gray-600">{m.Type.toUpperCase()} • {m.Runtime} • Rated: {m.Rated}</p>

        <div className="text-gray-700">
          <p><strong>Genre:</strong> {m.Genre}</p>
          <p><strong>Language:</strong> {m.Language}</p>
          <p><strong>Country:</strong> {m.Country}</p>
          <p><strong>Released:</strong> {m.Released}</p>
        </div>

        <p className="text-lg leading-relaxed"><strong>Plot:</strong> {m.Plot}</p>

        <div className="space-y-1">
          <p><strong>Director:</strong> {m.Director}</p>
          <p><strong>Writers:</strong> {m.Writer}</p>
          <p><strong>Actors:</strong> {m.Actors}</p>
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-semibold">🎖️ Awards</h3>
          <p>{m.Awards || 'N/A'}</p>
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-semibold">📊 Ratings</h3>
          <ul className="list-disc ml-5">
            {m.Ratings?.map((r, idx) => (
              <li key={idx}>
                <strong>{r.Source}:</strong> {r.Value}
              </li>
            )) || <li>No ratings available</li>}
          </ul>
        </div>

        <div className="text-gray-600 text-sm pt-4 space-y-1">
          <p><strong>IMDB Rating:</strong> {m.imdbRating} ({m.imdbVotes} votes)</p>
          <p><strong>Box Office:</strong> {m.BoxOffice || 'N/A'}</p>
          <p><strong>Production:</strong> {m.Production || 'N/A'}</p>
          <p><strong>Official Website:</strong> {m.Website !== 'N/A' ? (
            <a href={m.Website} className="text-blue-600 underline" target="_blank" rel="noreferrer">Visit</a>
          ) : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
