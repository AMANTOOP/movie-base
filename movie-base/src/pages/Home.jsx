import hero from "../assets/home.png";
import home01 from "../assets/home-01.png";
import home02 from "../assets/home-02.png";
import home03 from "../assets/home-03.png";
import home04 from "../assets/home-04.png";
import home05 from "../assets/home-05.png";

import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
import BlurText from "../BlurText/BlurText";

const Home = () => {
  const navigate = useNavigate();
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  const movies = [
    {
      title: "Blockbuster Hits",
      subtitle: "Top 10 Movies This Month",
      img: home01,
    },
    {
      title: "Critically Acclaimed",
      subtitle: "Award-Winning Films",
      img: home02,
    },
    {
      title: "Must-Watch Classics",
      subtitle: "Timeless Movie Favorites",
      img: home03,
    },
    {
      title: "Binge-Worthy Series",
      subtitle: "Engaging TV Shows",
      img: home04,
    },
    {
      title: "Join the Movie",
      subtitle: "Cinematic Enthusiasts",
      img: home05,
    },
  ];

  return (
    <div className="bg-[#CEE2F2] min-h-screen">
      <section className="flex flex-col md:flex-row items-center justify-between p-10">
        <div className="max-w-xl space-y-4">
          <BlurText
            text="Explore Movies & TV Shows Anytime, Anywhere!"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />
          <p className="text-gray-600">Start your free trial today.</p>
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700"
            onClick={() => navigate("/search")}
          >
            Start watching
          </button>
        </div>
        <img
          src={hero}
          alt="Hero"
          className="h-56 md:h-72 object-contain mx-[5rem] bg-transparent"
        />
      </section>

      <section className="px-10">
        <h2 className="text-2xl font-bold mb-4">Discover Trending Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
