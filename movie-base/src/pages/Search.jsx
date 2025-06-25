// src/pages/Search.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovie } from "../context/MovieContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { movies, searchMovies, loading, error } = useMovie();

  const handleSearch = () => {
    if (query.trim()) {
      searchMovies(query);
    }
  };

  return (
    <div className="p-6 bg-[#CEE2F2] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Search Movies</h1>
      <div className="flex gap-2 mb-6">
        <input
          className="border px-4 py-2 w-full"
          placeholder="Enter movie name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {loading && (
        <div className="flex flex-col items-center my-10">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent mb-2"></div>
          <p className="text-gray-500">Searching movies...</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            onClick={() => navigate(`/movie/${movie.imdbID}`)}
            className="cursor-pointer hover:shadow-lg bg-white rounded overflow-hidden"
          >
            {movie.Poster !== "N/A" ? (
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="h-60 w-full object-cover transform transition duration-300 hover:scale-105"
              />
            ) : (
              <div className="h-full w-full bg-gray-300 flex items-center justify-center text-sm">
                No Image
              </div>
            )}
            <div className="p-2">
              <h3 className="font-semibold text-sm">{movie.Title}</h3>
              <p className="text-xs text-gray-500">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
