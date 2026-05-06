import React from "react";

const LearnMore = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">

      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-wide">
          Enter the World of Cinema 🎬

        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover, explore, and experience movies like 
          never before.
          From timeless classics to trending blockbusters 
          — everything
          lives here.
        </p>
      </section>

     
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="border border-gray-700 p-6 
        rounded-2xl hover:bg-gray-900 transition">
          <h2 className="text-xl
          
          
          font-semibold mb-2">🔥 Trending Now</h2>
          <p className="text-gray-400">
            Stay updated with the latest movies people are watching 
            right now.
          </p>
        </div>

        <div className="border border-gray-700 p-6 rounded-2xl hover:bg-gray-900 transition">
          <h2 className="text-xl font-semibold mb-2">🎭 Genres</h2>
          <p className="text-gray-400">
            Action, Drama, Comedy, Horror — explore movies by your mood.
          </p>
        </div>

        <div className="border border-gray-700 p-6 rounded-2xl hover:bg-gray-900 transition">
          <h2 className="text-xl font-semibold mb-2">⭐ Ratings</h2>
          <p className="text-gray-400">
            Find top-rated movies and hidden gems curated just for you.
          </p>
        </div>
      </section>

    
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Why This Platform?</h2>
        <p className="text-gray-400 leading-relaxed">
          This movie platform is built for true cinema lovers. 
          We don’t just
          list movies — we create an experience. Smooth navigation, clean UI,
          and powerful search make your journey effortless.
        </p>
      </section>


      <section className="text-center italic text-gray-500 mb-16">
        <p className="text-xl">
          “Movies are not just stories, they are emotions we live.”
        </p>
      </section>

     
            <section className="text-center">
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
          Explore Movies
        </button>
      </section>

      <footer className="text-center text-gray-600 mt-20 text-sm">
        © 2026 MovieHub — All Rights Reserved
      </footer>
    </div>
  );
};

export default LearnMore;
