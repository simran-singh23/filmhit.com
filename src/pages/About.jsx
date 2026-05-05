import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const About = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=a656d59b62ae9ac0e2c34b3d65ac12c9")
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        setMovies(data.results || []);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6 bg-black text-white min-h-screen">

      <h1 className="text-3xl mb-6 text-center">🎬 MovieHub</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((m) => (
            
          <div key={m.id} className="bg-gray-800 p-2 rounded">

            

            <p className="text-sm mt-2">{m.title}</p>
            <Link to={`/movie/${m.id}`}>
  <img
    src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
    alt=""
  />
  <p>{m.title}</p>
</Link>

          </div>
        ))}
      </div>

    </div>
  );
};

export default About;