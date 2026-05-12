import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaPlay, FaStar,FaFilm, FaFire,
  FaArrowRight,
} from "react-icons/fa";

const movies = [
  {
    id: 1, title: "Dark Moon",
    genre: "Sci-Fi",
    rating: "8.9",  trailer: "https://www.youtube.com/embed/9bZkp7q19f0",
    image:
      "https://i.pinimg.com/1200x/bb/ed/c0/bbedc00ce19a4972ff38587ec1f0a274.jpg",
  },

     
  {
    id: 2, title: "Lost City",
    genre: "Adventure",  rating: "8.2", trailer: "https://www.youtube.com/embed/kXYiU_JCYtU",
    image:
      "https://i.pinimg.com/736x/62/2d/85/622d85c93282269a3be327c49f06fdbe.jpg",
  },

  {
    id: 3,
    title: "Night Hunter",genre: "Action",
    rating: "9.1",trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    image:
      "https://i.pinimg.com/736x/84/e0/0f/84e00f8f016a8e3bc01bc013b9e1d17f.jpg",
  },
];

export default function MovieShowcase() {
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  return (
    <div className="bg-black text-white py-16 px-6 md:px-14">

      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-6xl 
        font-bold mb-4">
          Unlimited Movies, TV Shows & More
        </h1>

   <p className="text-gray-400 max-w-2xl mx-auto">
          Watch trending movies, 
          latest web series and blockbuster shows
          anytime anywhere.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
           {movies.map((movie) => (
          <motion.div  key={movie.id}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 rounded-3xl overflow-hidden shadow-lg"
          >
            <div className="relative">
              <img src={movie.image}
                alt={movie.title}
                className="h-[350px] w-full object-cover"
              />


              <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <FaFire />
                Trending
              </div>
              <button onClick={() => setSelectedTrailer(movie.trailer)}
                className="absolute bottom-4 right-4 bg-white text-black p-4 rounded-full hover:scale-110 duration-300"
              >
                <FaPlay />
              </button>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-2xl font-bold">{movie.title}</h2>

                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  <span>{movie.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <FaFilm />
                <p>{movie.genre}</p>
              </div>

              <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl flex items-center gap-3 duration-300">
                Watch Now
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedTrailer && (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
          
          <div className="relative w-[90%] md:w-[800px] h-[450px]">

          
            <button
              onClick={() => setSelectedTrailer(null)}
              className="absolute -top-12 right-0 text-white text-4xl"
            >
              ✕
            </button>

    
            <iframe width="100%"
              height="100%" src={selectedTrailer} title="Movie Trailer" allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      )}

  
      <div className="mt-20 bg-zinc-900 rounded-3xl p-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-5">
          Why Choose Our Platform?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          
          <div>
   <h3 className="text-2xl font-semibold mb-3">
              4K Streaming
            </h3>
<p className="text-gray-400">
              Enjoy ultra HD quality movies without buffering.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Daily New Content
            </h3>
  <p className="text-gray-400">
              Fresh movies and trending series added every day.
            </p>
          </div>

          <div> <h3 className="text-2xl font-semibold mb-3">
              Watch Anywhere
            </h3>
 <p className="text-gray-400">
              Mobile, tablet, laptop or TV — stream on every device.
            </p>
          </div>
        </div>
      </div>


      <footer className="border-t border-zinc-800 mt-16 pt-8 text-center text-gray-500">
        <p>© 2026 MovieFlix. All rights reserved.</p>
      </footer>
    </div>
  );
}