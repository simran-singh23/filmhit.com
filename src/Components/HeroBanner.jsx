import { useEffect, useState } from "react";
import bg from "../assets/asd.jpeg"; 

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
    <div className="relative h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden">
      
      <img 
        src={bg} 
        alt="bg" 
        className="absolute w-full h-full object-cover scale-110 animate-[zoom_20s_linear_infinite]"
      />


      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="absolute w-[300px] h-[300px] bg-red-600/30 rounded-full blur-3xl top-10 left-10"></div>

    
      <div className="relative z-10">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-wide">
          🎬 filmyhit
        </h1>

        <h2 className="text-xl md:text-3xl text-red-500 transition duration-500">
          {texts[index]}
        </h2>

        <button className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition text-white shadow-lg shadow-red-500/40">
          Explore Now
        </button>

      </div>
    </div>
  );
}