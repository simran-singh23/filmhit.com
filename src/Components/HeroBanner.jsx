import { useEffect, useState } from "react";

export default function HeroBanner() {
  const texts = ["Watch Movies", "Enjoy Trailers", "Discover New Films"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);

    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[60vh] flex flex-col justify-center items-center text-center 
    bg-gradient-to-r from-black via-gray-900 to-black">
      
      <h1 className="text-4xl md:text-6xl font-bold mb-4
       animate-pulse">
        🎬 filmyhit
      </h1>

      <h2 className="text-xl md:text-3xl text-red-500 
      transition duration-500">
        {texts[index]}
      </h2>

      <button className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700
       rounded-lg transition">
        Explore Now
      </button>
    </div>
  );
}