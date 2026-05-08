import React from 'react'

const Play = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">

      <h1 className="text-3xl md:text-5xl font-bold text-red-600 mb-8 uppercase tracking-widest animate-pulse">
        Spider-Man: No Way Home
      </h1>


      <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.5)] border-2 border-red-900">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/JfVOs4VSpmA?autoplay=1"
          title="Spider-Man Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>


      <button 
        onClick={() => window.history.back()}
        className="mt-10 px-8 py-3 bg-red-700 hover:bg-red-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        BACK TO HOME
      </button>
    </div>
  )
}

export default Play