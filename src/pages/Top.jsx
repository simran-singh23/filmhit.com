import React from 'react';
import { useNavigate } from 'react-router-dom';

const Top = () => {
  const navigate = useNavigate();
  const moviesData = [
   {
  id: 1,
  title: "Avatar",
  year: 2009,
  rating: "7.9",
  genre: "Sci-Fi/Adventure",
  duration: "2h 42m",
  director: "James Cameron",
  image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  tag: "🌍 Epic",
  color: "from-cyan-500 to-blue-600"
},
{
  id: 2,
  title: "Joker",
  year: 2019,
  rating: "8.4",
  genre: "Crime/Drama",
  duration: "2h 2m",
  director: "Todd Phillips",
  image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  tag: "🃏 Dark",
  color: "from-green-700 to-gray-900"
},
{
  id: 3,
  title: "Titanic",
  year: 1997,
  rating: "7.9",
  genre: "Romance/Drama",
  duration: "3h 14m",
  director: "James Cameron",
  image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
  tag: "🚢 Emotional",
  color: "from-blue-500 to-sky-400"
},
{
  id: 4,
  title: "Avengers: Endgame",
  year: 2019,
  rating: "8.4",
  genre: "Action/Sci-Fi",
  duration: "3h 1m",
  director: "Russo Brothers",
  image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  tag: "🦸 Ultimate",
  color: "from-purple-700 to-indigo-500"
},
{
  id: 5,
  title: "Spider-Man: No Way Home",
  year: 2021,
  rating: "8.2",
  genre: "Action/Fantasy",
  duration: "2h 28m",
  director: "Jon Watts",
  image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  tag: "🕷️ Multiverse",
  color: "from-red-600 to-blue-600"
},
{
  id: 6,
  title: "John Wick",
  year: 2014,
  rating: "7.4",
  genre: "Action/Thriller",
  duration: "1h 41m",
  director: "Chad Stahelski",
  image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
  tag: "🔫 Action Packed",
  color: "from-gray-800 to-black"
},
{
  id: 7,
  title: "Doctor Strange",
  year: 2016,
  rating: "7.5",
  genre: "Fantasy/Action",
  duration: "1h 55m",
  director: "Scott Derrickson",
  image: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
  tag: "✨ Magic",
  color: "from-orange-500 to-red-500"
},
{
  id: 8,
  title: "Black Panther",
  year: 2018,
  rating: "7.3",
  genre: "Action/Adventure",
  duration: "2h 14m",
  director: "Ryan Coogler",
  image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
  tag: "👑 Wakanda",
  color: "from-purple-900 to-yellow-500"
}
  ];

  const handleNextClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
       
       
             <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>


      <div className="relative z-10">
     
        <div className="relative overflow-hidden bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
       <div className="text-center">
            
              <div className="relative inline-block">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                    🎬 filmyhit
                </h1>
       <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-2xl opacity-50 animate-pulse">
                  filmyhit
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                Discover the <span className="text-purple-400 font-bold">greatest</span> movies of all time
              </p>


     <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="glass-card px-5 py-2 rounded-full">
                  <span className="text-xl font-bold text-purple-400">250+</span>
                  <span className="text-gray-400 ml-2 text-sm">Movies</span>
                </div>
                <div className="glass-card px-5 py-2 rounded-full">
                  <span className="text-xl font-bold text-pink-400">30+</span>
                  <span className="text-gray-400 ml-2 text-sm">Genres</span>
                </div>
             <div className="glass-card px-5 py-2 rounded-full">
                  <span className="text-xl font-bold text-cyan-400">15K+</span>
                  <span className="text-gray-400 ml-2 text-sm">Reviews</span>
                </div>
               </div>
            </div>
          </div>

         
      
        </div>

     
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
         <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Movies</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-3 text-sm">Handpicked collection of cinematic masterpieces</p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {moviesData.map((movie, index) => (
              <div
                key={movie.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
              >
        
                <div className={`absolute inset-0 bg-gradient-to-br ${movie.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
               
                <div className="relative overflow-hidden h-56 sm:h-64">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
            
                  <div className="absolute top-3 left-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-md opacity-75"></div>
                      <span className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                        {movie.tag}
                      </span>
                    </div>
                  </div>
                  
              
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 border border-yellow-500/50">
                    <span className="text-yellow-400 text-xs">⭐</span>
                    <span className="text-white font-bold text-xs">{movie.rating}</span>
                  </div>
                  
         
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-white text-xs">{movie.year}</span>
                  </div>
                </div>
                
               
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-1">
                    {movie.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-2">
                    <span className="text-xs text-gray-400
                     bg-white/5 px-2 py-0.5 rounded-full">
                      {movie.genre}
                    </span>
                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded-full">
                      {movie.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs">
                    🎬 {movie.director}
                  </p>
                  
                 
                  <button className="w-full mt-3 relative overflow-hidden group/btn bg-gradient-to-r from-purple-600 to-pink-600 text-white py-1.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/50">
                    <span className="relative z-10">Watch Trailer →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

     
        <div className="relative mt-8 mb-16">
   
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 text-center">
       
            <div className="inline-block relative group">
    
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              
              <button
                onClick={handleNextClick}
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center gap-3 group/btn"
              >
                <span>Next → Contact Page</span>
               
              </button>
            </div>
            
            <p className="text-gray-500 mt-4 text-xs md:text-sm">
              Click to explore more amazing content ✨
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Top;