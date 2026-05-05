import { Link, useParams } from "react-router-dom";

const movies = {
  1: {
    title: "Avengers: Endgame",
    trailerKey: "TcMBFSGVi1c",
  },
  2: {
    title: "Joker",
    trailerKey: "zAGVQLHvwOY",
  },
  3: {
    title: "Batman",
    trailerKey: "mqqft2x_Aa4",
  },
  4: {
    title: "Spider-Man",
    trailerKey: "JfVOs4VSpmA",
  },
};

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies[id];

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      {movie ? (
        <div className="mx-auto max-w-5xl">
          <Link to="/" className="inline-block text-red-400 hover:underline mb-6">
            Back to Home
          </Link>

          <h1 className="text-3xl font-bold mb-5">{movie.title} Trailer</h1>

          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${movie.trailerKey}?autoplay=1&rel=0`}
              title={`${movie.title} trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <a
            href={`https://www.youtube.com/watch?v=${movie.trailerKey}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-5 text-red-400 hover:underline"
          >
            Open trailer on YouTube
          </a>
        </div>
      ) : (
        <div className="mx-auto max-w-5xl">
          <p className="mb-4">Trailer not found.</p>
          <Link to="/" className="text-red-400 hover:underline">
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
