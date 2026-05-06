import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_KEY = "a656d59b62ae9ac0e2c34b3d65ac12c9";

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
  const localMovie = movies[id];
  const [remoteResult, setRemoteResult] = useState({
    id: null,
    movie: null,
  });
  const remoteMovie = remoteResult.id === id ? remoteResult.movie : null;
  const movie = localMovie || remoteMovie;
  const loading = !localMovie && remoteResult.id !== id;

  useEffect(() => {
    if (localMovie) {
      return;
    }

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const trailer = data.results?.find(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        );

        setRemoteResult({
          id,
          movie: trailer
            ? {
                title: "Movie",
                trailerKey: trailer.key,
              }
            : null,
        });
      })
      .catch(() =>
        setRemoteResult({
          id,
          movie: null,
        })
      );
  }, [id, localMovie]);

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      {loading ? (
        <div className="mx-auto max-w-5xl">
          <p>Loading trailer...</p>
        </div>
      ) : movie ? (
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
            href={`https://www.youtube.com/watch?v=${movie.trailerKey}`}  target="_blank"    rel="noreferrer" className="inline-block mt-5 text-red-400 hover:underline"
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
