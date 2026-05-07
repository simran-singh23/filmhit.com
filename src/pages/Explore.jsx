import React from "react";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();

  const movies = [
    {
    id: 1,
    title: "Oppenheimer",
    year: 2023,
    genre: "Drama",
    img: "https://i.pinimg.com/1200x/77/9d/a3/779da30964fb69b47c4f03138d482f9d.jpg",
  },
  {
    id: 2,
    title: "Barbie",
    year: 2023,
    genre: "Comedy",
    img: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
  },
  {
    id: 3,
    title: "John Wick 4",
    year: 2023,
    genre: "Action",
    img: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  },
  {
    id: 4,
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    genre: "Animation",
    img: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  },
  {
    id: 5,
    title: "The Batman",
    year: 2022,
    genre: "Action",
    img: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    id: 6,
    title: "Dune",
    year: 2021,
    genre: "Sci-Fi",
    img: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
  {
    id: 7,
    title: "Avatar: The Way of Water",
    year: 2022,
    genre: "Sci-Fi",
    img: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  },
  {
    id: 8,
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    genre: "Action",
    img: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
  },
  {
    id: 9,
    title: "Fast X",
    year: 2023,
    genre: "Action",
    img: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
  },
  {
    id: 10,
    title: "Mission Impossible: Dead Reckoning",
    year: 2023,
    genre: "Action",
    img: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
  },
  {
    id: 11,
    title: "Avatar: Fire and Ash",
    year: 2025,
    genre: "Sci-Fi",
    img: "https://i.pinimg.com/736x/fc/64/f4/fc64f4ef0381331d52a80b204ce75749.jpg",
  },
  {
    id: 12,
    title: "The Conjuring: Last Rites",
    year: 2025,
    genre: "Horror",
    img: "https://i.pinimg.com/736x/90/5f/4d/905f4d1d46de01af25a2b422f02a3246.jpg",
  },
  {
    id: 13,
    title: "The Long Walk",
    year: 2025,
    genre: "Thriller",
    img: "https://i.pinimg.com/736x/ca/7e/95/ca7e95e75ae462d306396b95b665fc4a.jpg",
  },
  {
    id: 14,
    title: "Demon Slayer: Infinity Castle",
    year: 2025,
    genre: "Anime",
    img: "https://i.pinimg.com/736x/58/4a/e6/584ae668b6a58930f1f59ab7ee37c072.jpg",
  },
  {
    id: 15,
    title: "Mortal Kombat 2",
    year: 2026,
    genre: "Action",
    img: "https://i.pinimg.com/736x/62/25/6d/62256dc21e416f19f5d1a3d8e00eda69.jpg",
  },
  {
    id: 16,
    title: "Spider-Man: Brand New Day",
    year: 2026,
    genre: "Action",
    img: "https://i.pinimg.com/736x/79/c5/03/79c503a94198d27b25a92c5aeddabe9c.jpg",
  },
  {
    id: 17,
    title: "Toy Story 5",
    year: 2026,
    genre: "Animation",
    img: "https://i.pinimg.com/1200x/9f/9a/62/9f9a6212566864f4825d276668d7044b.jpg",
  },
  {
    id: 18,
    title: "Avengers: Doomsday",
    year: 2026,
    genre: "Superhero",
    img: "https://i.pinimg.com/736x/e0/07/ce/e007ce885cc3f6c5a93aa4a4cd12c95d.jpg",
  },
  {
    id: 19,
    title: "Dune: Part Three",
    year: 2026,
    genre: "Sci-Fi",
    img: "https://i.pinimg.com/736x/a7/31/7d/a7317dc2cc8c72fa3e1acd842c2301c4.jpg",
  },
  {
    id: 20,
    title: "The Mandalorian & Grogu",
    year: 2026,
    genre: "Sci-Fi",
    img: "https://i.pinimg.com/736x/33/c8/63/33c8639ac8a45ca2379c481a0049b2b3.jpg",
  }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">

      <h1 className="text-4xl font-bold mb-6 text-center">
        🎬 Explore Cinema
      </h1>

      <p className="max-w-xl mx-auto text-center text-gray-300 mb-10 leading-relaxed">
        Discover real movies with real posters — cinematic experience starts here.
      </p>

      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:scale-105 transition duration-300"
          >
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-400">
                {movie.genre} • {movie.year}
              </p>

              <button onClick={() => navigate("/contact")}
                className="mt-3 w-full bg-green-500 hover:bg-green-600 text-black py-2 rounded-lg font-semibold"
              >
                ▶ Play
              </button>
            </div>
          </div>
        ))}
      </div>

 
      <div className="relative w-full overflow-hidden h-20 mt-10 flex items-center justify-center">
  <p className="text-gray-400">
    🍿 Keep watching… more stories coming your way.
  </p>
</div>
    </div>
  );
};

export default Explore;