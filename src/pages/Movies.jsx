import React from 'react';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const navigate = useNavigate();

  const moviesData = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      rating: "8.8",
      genre: "Sci-Fi/Action",
      duration: "2h 28m",
      director: "Christopher Nolan",
      image: "hhttps://i.pinimg.com/1200x/3c/28/47/3c284737d4ee8eeb333d885f34f66917.jpg",
      tag: "Mind-Bending",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      rating: "9.0",
      genre: "Action/Crime",
      duration: "2h 32m",
      director: "Christopher Nolan",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      tag: "Masterpiece",
      color: "from-gray-700 to-gray-900"
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      rating: "8.6",
      genre: "Sci-Fi/Drama",
      duration: "2h 49m",
      director: "Christopher Nolan",
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      tag: "Emotional",
      color: "from-blue-600 to-cyan-500"
    },
    {
      id: 4,
      title: "The Matrix",
      year: 1999,
      rating: "8.7",
      genre: "Sci-Fi/Action",
      duration: "2h 16m",
      director: "Wachowski Sisters",
      image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      tag: "Revolutionary",
      color: "from-green-700 to-emerald-500"
    },
    {
      id: 5,
      title: "Forrest Gump",
      year: 1994,
      rating: "8.8",
      genre: "Drama/Romance",
      duration: "2h 22m",
      director: "Robert Zemeckis",
      image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5e1mrEiO0tE8Fs6Y2.jpg",
      tag: "Inspirational",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 6,
      title: "The Shawshank Redemption",
      year: 1994,
      rating: "9.3",
      genre: "Drama",
      duration: "2h 22m",
      director: "Frank Darabont",
      image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      tag: "Legendary",
      color: "from-indigo-600 to-blue-500"
    },
    {
      id: 7,
      title: "Pulp Fiction",
      year: 1994,
      rating: "8.9",
      genre: "Crime/Drama",
      duration: "2h 34m",
      director: "Quentin Tarantino",
      image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      tag: "Cult Classic",
      color: "from-red-600 to-orange-500"
    },
    {
      id: 8,
      title: "The Lord of the Rings",
      year: 2001,
      rating: "8.9",
      genre: "Fantasy/Adventure",
      duration: "2h 58m",
      director: "Peter Jackson",
      image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      tag: "Epic",
      color: "from-amber-700 to-yellow-600"
    }
  ];

  const handleNextClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">

        <div className="relative overflow-hidden bg-black/30 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="inline-block">
                <div className="relative group">
                  <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                    CINEMATIC
                  </h1>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-xl opacity-50 group-hover:opacity-100 transition-opacity">
                    CINEMATIC
                  </div>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mt-4 max-w-2xl mx-auto">
                Experience the magic of <span className="text-purple-400 font-bold">extraordinary</span> storytelling
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mt-8">
                <div className="glass-card px-6 py-3 rounded-full">
                  <span className="text-2xl font-bold text-purple-400">200+</span>
                  <span className="text-gray-400 ml-2">Movies</span>
                </div>
                <div className="glass-card px-6 py-3 rounded-full">
                  <span className="text-2xl font-bold text-pink-400">50+</span>
                  <span className="text-gray-400 ml-2">Genres</span>
                </div>
                <div className="glass-card px-6 py-3 rounded-full">
                  <span className="text-2xl font-bold text-cyan-400">10K+</span>
                  <span className="text-gray-400 ml-2">Reviews</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full opacity-20">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Masterpieces</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {moviesData.map((movie, index) => (
              <div
                key={movie.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
             
                <div className={`absolute inset-0 bg-gradient-to-br ${movie.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
             
                <div className="relative overflow-hidden h-64">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
      
                  <div className="absolute top-4 left-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-xs font-bold">
                        {movie.tag}
                      </span>
                    </div>
                  </div>
               
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 border border-yellow-500/50">
                    <span className="text-yellow-400 text-sm">⭐</span>
                    <span className="text-white font-bold text-sm">{movie.rating}</span>
                  </div>
                </div>
             
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {movie.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                      {movie.year}
                    </span>
                    <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                      {movie.genre}
                    </span>
                    <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                      {movie.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    Dir: {movie.director}
                  </p>
                  <button className="w-full relative overflow-hidden group/btn bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/50">
                    <span className="relative z-10">Watch Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

     
        <div className="relative">
         
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="inline-block relative group">
           
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              
              <button
                onClick={handleNextClick}
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center gap-3 group/btn"
              >
                <span>Continue Your Journey</span>
                <svg 
                  className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
            
            <p className="text-gray-400 mt-6 text-sm">
              Discover more amazing content on the next page ✨
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Movies;
