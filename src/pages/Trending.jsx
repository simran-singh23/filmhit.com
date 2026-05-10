import React, { useState, useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Trending = () => {
  const [timeWindow, setTimeWindow] = useState('day')
  const [trendingData, setTrendingData] = useState([])
  const [loading, setLoading] = useState(true)
  const [hoveredCard, setHoveredCard] = useState(null)
  const navigate = useNavigate()
  

  const mockTrending = {
    day: [
      { id: 1, title: "Dune: Part Two", rating: 8.7, year: 2024, 
        genre: "Sci-Fi", views: "1.2M", trend: "+245%", image: "🎬" },
      { id: 2, title: "The Batman", rating: 8.3, year: 2022, 
        genre: "Action", views: "980K", trend: "+189%", image: "🦇" },
      { id: 3, title: "Oppenheimer", rating: 8.9, year: 2023,
         genre: "Drama", views: "2.1M", trend: "+567%", image: "💣" },
      { id: 4, title: "John Wick 4", rating: 8.2, year: 2023, 
        genre: "Action", views: "1.5M", trend: "+312%", image: "🔫" },
      { id: 5, title: "Spider-Verse", rating: 8.8, year: 2023,
         genre: "Animation", views: "1.8M", trend: "+423%", image: "🕷️" },
      { id: 6, title: "Avatar 2", rating: 7.8, year: 2022,
         genre: "Sci-Fi", views: "2.5M", trend: "+178%", image: "🌊" },
    ],
    week: [
      { id: 7, title: "Barbie", 
        rating: 7.9, year: 2023, genre: "Comedy", views: "3.2M", trend: "+892%", image: "🎀" },
      { id: 8, title: "Killers of Flower", rating: 8.1, year: 2023, 
        genre: "Crime", views: "876K", trend: "+156%", image: "🌺" },
      { id: 9, title: "Poor Things", rating: 8.4, year: 2023, 
        genre: "Fantasy", views: "654K", trend: "+278%", image: "🧪" },
      { id: 10, title: "The Holdovers", rating: 8.0, year: 2023, 
        genre: "Drama", views: "543K", trend: "+234%", image: "📚" },
    ]
  }


  const openPlayPage = () => {
    navigate("/play");
  };


  useEffect(() => {setLoading(true)


                 setTimeout(() => {
      setTrendingData(mockTrending[timeWindow])
      setLoading(false)
    }, 500)
  }, [timeWindow])

  const getTrendColor = (trend) => {
    const value = parseInt(trend.replace('%', '').replace('+', ''))
    if (value > 300) return 'bg-gradient-to-r from-red-500 to-orange-500'
    
    if (value > 150) return 'bg-gradient-to-r from-orange-500 to-yellow-500'
    return 'bg-gradient-to-r from-green-500 to-teal-500'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900
     text-white">
      
    
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 pb-32 pt-20 px-4 clip-path-custom">
        <div className="container mx-auto text-center">

          <div className="animate-bounce text-6xl mb-4">🔥</div>

     <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Trending <span className="bg-gradient-to-r from-yellow-400 to-red-500 

            bg-clip-text text-transparent">Now</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            What the world is watching right now
          </p>
  
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setTimeWindow('day')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                timeWindow === 'day' 

                  ? 'bg-gradient-to-r from-red-500 to-yellow-500 shadow-lg scale-105' 
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              🚀 Today's Hot
            </button>
            <button
              onClick={() => setTimeWindow('week')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                timeWindow === 'week' 
                  ? 'bg-gradient-to-r from-red-500 to-yellow-500 shadow-lg scale-105' 
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              🏆 Weekly Winners
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 mb-12">

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

             <div className="text-center">
  <div className="text-3xl mb-2">📊</div>

            <div className="text-3xl font-bold text-yellow-400">{trendingData.length}</div>

            <div className="text-gray-300">Trending Movies</div>
          </div>
          <div className="text-center">
        <div className="text-3xl mb-2">👁️</div>
            <div className="text-3xl font-bold text-yellow-400">

              {trendingData.reduce((acc, movie) => acc + parseInt(movie.views), 0)}M+

            </div>
            <div className="text-gray-300">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-3xl font-bold text-yellow-400">
              {(trendingData.reduce((acc, movie) => acc + movie.rating, 0) / trendingData.length).toFixed(1)}
            </div>
            <div className="text-gray-300">Avg Rating</div>
       
          </div>
        </div>
      </div>

     
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-300">Fetching trending movies...</p>
        </div>
      ) : (
        <>

          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingData.map((movie, index) => (
                <div
                  key={movie.id}
                  className="relative bg-white/10 backdrop-blur-lg 
                           rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl border border-white/20"
                  onMouseEnter={() => setHoveredCard(movie.id)}

                  onMouseLeave={() => setHoveredCard(null)}
                >
      
                  <div className="absolute top-4 right-4 text-6xl font-bold opacity-20 text-yellow-400">
                    #{index + 1}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-7xl mb-4">{movie.image}</div>

                    <h3 className="text-2xl font-bold mb-2">{movie.title}</h3>
                    
                    <div className="flex justify-center gap-4 text-sm text-gray-300 mb-4">
               <span>{movie.year}</span>

                      <span>•</span>
                      <span>{movie.genre}</span>
                    </div>
                    
                    <div className="flex justify-between items-center bg-black/30 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-1">
                        <span>⭐</span>
                       <span className="font-bold text-yellow-400">{movie.rating}</span>
                    <span className="text-gray-400 text-sm">/10</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>👁️</span>
   
                        <span>{movie.views}</span>
                      </div>
                    </div>
                    
                    <div className={`${getTrendColor(movie.trend)} p-3 rounded-lg font-bold animate-pulse`}>
                      📈 {movie.trend} this week
                    </div>
                  </div>
                    {hoveredCard === movie.id && (
                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent
                  rounded-b-2xl flex gap-2 animate-slide-up">
                <button className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold transition">
                        ▶ Watch Now
               </button>
           <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg font-semibold transition">
                        ℹ Details
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-4 py-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-center mb-8">📈 Trending Velocity</h3>
              <div className="space-y-4">
     {trendingData.map((movie, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1 text-sm">
        <span className="font-medium">{movie.title.slice(0, 15)}</span>
                      <span className="text-yellow-400">{movie.trend}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-8 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-red-500 to-yellow-500 h-full rounded-full
                         flex items-center justify-end px-4 transition-all duration-1000"
                        style={{ width: `${Math.min(100, parseInt(movie.trend) / 10)}%` }}
                      >
                        <span className="text-white text-sm font-bold">{movie.trend}</span>
                </div>
                    </div>
                  </div>
                  
                ))}
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 py-12 mb-12">
 <div className="bg-gradient-to-r from-yellow-600 to-pink-600 rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Watch?</h3>

              <p className="text-lg mb-6">Join millions of viewers watching trending movies</p>

            

            <button type="button" onClick={(event) => {event.stopPropagation();
                        openPlayPage();
                      }}
                      className="mx-auto mt-6 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl flex items-center gap-3 duration-300"
                    >
                      Play Now
                      <FaArrowRight />
                    </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Trending