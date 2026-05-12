import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Newsroom = () => {
  const news = [
    {
      id: 1,
      category: "Movie Update",
      title: "Marvel Announces New Avengers Movie",
      date: "May 2026",
    },
    {
      id: 2,
      category: "Streaming",
      title: "Netflix Reveals Top 10 Trending Shows",
      date: "April 2026",
    },
    {
      id: 3,
      category: "Celebrity",
      title: "Hollywood Stars Spotted At Cannes",
      date: "March 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      <div className="relative h-[60vh] flex items-center justify-center border-b border-zinc-800">
        
    
        <div className="absolute w-72 h-72 bg-red-600/30 blur-3xl rounded-full top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-pink-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-[8px] text-red-500 mb-4">
            Entertainment News
          </p>

          <h1 className="text-6xl md:text-7xl font-black leading-tight">
            NEWSROOM
          </h1>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
            Discover breaking movie news, celebrity updates, streaming
            releases and entertainment stories from around the world.
          </p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {news.map((item) => (
          <div
            key={item.id}
            className="group relative bg-zinc-900/70 border border-zinc-800 rounded-[30px] p-8 hover:border-red-500 transition duration-500 backdrop-blur-lg"
          >
          
            <h1 className="absolute top-5 right-6 text-6xl font-black text-zinc-800 group-hover:text-red-500/20 transition">
              0{item.id}
            </h1>

            <p className="text-red-500 uppercase text-sm tracking-widest mb-4">
              {item.category}
            </p>

            <h2 className="text-3xl font-bold leading-snug mb-6 group-hover:text-red-400 transition">
              {item.title}
            </h2>

            <div className="flex items-center justify-between">
              <span className="text-zinc-500">{item.date}</span>

              <button className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center group-hover:rotate-45 transition duration-500">
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      
      <div className="px-6 pb-16">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-red-600 to-pink-600 rounded-[40px] p-10 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Stay Updated Daily 🎬
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-8">
            Get the latest updates about movies, OTT platforms,
            celebrities and entertainment trends.
          </p>

          <button className="bg-black hover:bg-zinc-900 px-8 py-4 rounded-full text-lg font-semibold transition">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsroom;