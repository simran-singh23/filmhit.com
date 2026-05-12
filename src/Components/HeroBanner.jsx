import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import bg from "../assets/asd.jpeg";

const texts = ["Watch Movies", "Enjoy Trailers", "Discover New Films"];

export default function HeroBanner() {

  const [index, setIndex] = useState(0);
  
  const navigate = useNavigate();

  const openPlayPage = () => {
    navigate("/play");
  };

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div role="button"
      tabIndex={0}
      onClick={openPlayPage}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          openPlayPage();
        }
      }}
      className="relative h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden cursor-pointer"
    >
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
  );
}
