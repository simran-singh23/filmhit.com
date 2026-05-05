import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "a656d59b62ae9ac0e2c34b3d65ac12c9";

const MovieDetail = () => {
  const { id } = useParams();
  const [trailer, setTrailer] = useState(null);


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
 
      .then(res => res.json())
      .then(data => {
        const vid = data.results?.[0];
        if (vid) setTrailer(vid.key);
      });
  }, [id]);

  return (
    <div className="bg-black
     text-white min-h-screen flex justify-center 
     items-center">

      {trailer ? (
        <iframe className="w-[80%] h-[60%]" src={`https://www.youtube.com/embed/${trailer}`}
      allowFullScreen
        />
      ) : (
        <p>Loading trailer...</p>
      )}

    </div>
  );
};

export default MovieDetail;