import bookvideo from "./bookvideo.mp4";

export default function VideoHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
 
      <video
        className="absolute top-0 left-0 w-full h-full object-cover" src={bookvideo}   
        autoPlay  loop muted
      />

      <div className="absolute top-0 left-0 w-full h-full
       bg-black/50"></div>


      <div className="relative z-10 flex 
      flex-col justify-center items-center h-full
       text-white text-center">
        <h1 className="text-5xl font-bold">
            Welcome to Movies</h1>
        <p className="mt-4 text-lg">
            Watch trending movies now 🎥</p>
        <button className="mt-6 px-6 py-3 bg-red-600 rounded">
          Play Now
        </button>
      </div>
    </div>
  );
}