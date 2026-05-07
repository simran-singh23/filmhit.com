import React from "react";

const movies90s = [
  {
    title: "Dilwale Dulhania Le Jayenge",
    actor: "Shah Rukh Khan", desc: "Iconic romantic film of the 90s era",
    img: "https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg", trailer: "https://www.youtube.com/watch?v=c25GKl5VNeY"
  },
  {
    title: "Titanic",
    actor: "Leonardo DiCaprio", desc: "A timeless love story on a sinking ship",
    img: "https://i.pinimg.com/736x/23/e5/17/23e51762dccd3209ab7768e2fdb0a461.jpg", trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ"
  },
  {
    title: "Jurassic Park",
    actor: "Sam Neill", desc: "Dinosaurs brought to life in a thrilling adventure", img: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg", trailer: "https://www.youtube.com/watch?v=lc0UehYemQA"
  },
  {
    title: "Hum Aapke Hain Koun",  actor: "Salman Khan", desc: "Classic Bollywood family drama",
    img: "https://i.pinimg.com/736x/11/5c/a7/115ca742a4c0d7ad1457ced6a653b94d.jpg",
    trailer: "https://www.youtube.com/watch?v=dZ0fwJojhrs"
  },
  { title: "Border", actor: "Sunny Deol", desc: "War film based on true events",
    img: "https://i.pinimg.com/736x/3b/64/57/3b645739f483733547db25eb21caf6d5.jpg", trailer: "https://www.youtube.com/watch?v=Qz5s9bQfV6Q"
  },
  {
    title: "Baazigar",
    actor: "Shah Rukh Khan",
    desc: "Thriller with a negative hero role",
    img: "https://i.pinimg.com/736x/d5/7f/c5/d57fc5ffdbb9487fa4500c7f80aa1f3a.jpg",
    trailer: "https://www.youtube.com/watch?v=5fF8m3xG1k8"
  },
  {
    title: "The Matrix",  actor: "Keanu Reeves", desc: "Sci-fi action that changed cinema",  img: "https://i.pinimg.com/736x/ed/45/16/ed4516338fa5df348c13a2a7ce1e7998.jpg",trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
  },
  {
    title: "Fight Club",
    actor: "Brad Pitt",desc: "Dark psychological drama",
    img: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg", trailer: "https://www.youtube.com/watch?v=SUXWAEX2jlg"
  }
];

export default function MovieSection() {
  return (
    <div className="px-6 py-10 bg-black text-white">
      
      <h2 className="text-2xl font-bold mb-4">
     MOST WACTHING MOVIES OF LAST 20 YEARS
      </h2>

      <div className="flex gap-4 overflow-x-auto">
        
        {movies90s.map((movie, index) => (
          <div
            key={index} onClick={() => window.open(movie.trailer, "_blank")}
            className="min-w-[220px] h-[320px] relative
             rounded-lg
              overflow-hidden
               group cursor-pointer 
               active:scale-95"
          >
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-full object-cover
               group-hover:scale-110 
               transition 
               duration-300"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black
             via-transparent to-transparent"></div>

            <div className="absolute bottom-3 left-3 right-3 opacity-0 
      group-hover:opacity-100
             transition duration-300">
              <h3 className="text-sm font-semibold">{movie.title}</h3>
              <p className="text-xs text-gray-300">⭐ {movie.actor}</p>
              <p className="text-xs text-gray-400">{movie.desc}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}