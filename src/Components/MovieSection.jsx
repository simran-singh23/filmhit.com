const movies90s = [
  {
    title: "Dilwale Dulhania Le Jayenge",
    actor: "Shah Rukh Khan",
    desc: "Iconic romantic film of the 90s era",
    img: "https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg"
  },
 
  {
    title: "Titanic",
     actor: "Leonardo DiCaprio",
desc: "A timeless love story on a sinking ship",
    img: "https://i.pinimg.com/736x/23/e5/17/23e51762dccd3209ab7768e2fdb0a461.jpg"
  },
  
  {
    title: "Jurassic Park",
       actor: "Sam Neill",
desc: "Dinosaurs brought to life in a thrilling adventure",
    img: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg"
  },
  {
 title: "Hum Aapke Hain Koun",
    actor: "Salman Khan",
  
  
    desc: "Classic Bollywood family drama",
    img: "https://i.pinimg.com/736x/11/5c/a7/115ca742a4c0d7ad1457ced6a653b94d.jpg"
  }
];

export default function 
MovieSection() {
  return (
    <div className="px-6 py-10 bg-black text-white">
      
      <h2 className="text-2xl font-bold mb-4">
        🔥 90s Classics
      </h2>

  
      <div className="flex gap-4 overflow-x-auto">
        
        {movies90s.map((movie, index) => (
          <div
            key={index}
            className="min-w-[220px] h-[320px] relative rounded-lg overflow-hidden group cursor-pointer"
          >

            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />


            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

 
            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition duration-300">
             
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