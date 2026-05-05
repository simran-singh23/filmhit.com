import { Link } from "react-router-dom";
import VideoHero from "../Components/VideoHero";
import HeroBanner from "../Components/HeroBanner";

const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: 2,
    title: "Joker",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    id: 3,
    title: "Batman",
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    id: 4,
    title: "Spider-Man",
    image: "https://i.pinimg.com/736x/b6/05/0e/b6050ef2d569681460a68a15c82ead4d.jpg",
  },
];

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <VideoHero />

      <div className="mb-10">
        <h1 className="text-4xl font-bold">Movie Hub</h1>
        <p className="text-gray-400 mt-2">Discover your favorite movies.</p>
      </div>

      <div className="mb-10 text-gray-300 space-y-4">
        <p>
          MovieHub is a popular entertainment platform offering Bollywood,
          Hollywood and South Indian Hindi dubbed movies.
          <Link to="/movie/1" className="text-red-500 ml-2 hover:underline">
            Explore Now
          </Link>
        </p>

        <p>
          Discover trending movies, web series and latest updates.
          <Link to="/movie/2" className="text-red-500 ml-2 hover:underline">
            View Joker
          </Link>
        </p>

        <p>
          Browse action, drama and thriller collections.
          <Link to="/movie/3" className="text-red-500 ml-2 hover:underline">
            Watch Batman
          </Link>
        </p>

        <p>
          Stay updated with new releases and top rated content.
          <Link to="/movie/4" className="text-red-500 ml-2 hover:underline">
            See Spider-Man
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-3">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-sm text-red-400 mt-1">Play trailer</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
           
      <HeroBanner />
    </div>
  );
};

export default Home;
