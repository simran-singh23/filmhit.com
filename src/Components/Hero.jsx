import { Link } from "react-router-dom";
import simu from "../assets/simu.png";

export default function Hero() {
  return (
    <div className="w-full min-h-[90vh] flex flex-col md:flex-row">
      
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-10 bg-white">
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Build Something <span className="text-blue-600">Different</span>
        </h1>

        <p className="text-gray-600 mb-6 text-lg">
          Not just a website — create an experience that people remember.
        </p>

        <div className="flex gap-4">
          
          <Link to="/explore">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Explore
            </button>
          </Link>

          <Link to="/learn-more">
            <button className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
              Learn More
            </button>
          </Link>

        </div>

      </div>

      <div className="w-full md:w-1/2 relative">
        <img src={simu} alt="Simu" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>
      </div>

    </div>
  );
}