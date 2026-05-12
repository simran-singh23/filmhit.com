export default function MoviePodcastPage() {
  const podcasts = [
    {
      id: 1,
      title: "Marvel Talks",
      host: "Tony Stark",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
      desc: "Latest Marvel movies, fan theories and superhero breakdowns.",
    },
    {
      id: 2,
      title: "Cinema Vibes",
      host: "Emma Watson",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
      desc: "Weekly movie reviews and trending OTT recommendations.",
    },
    {
      id: 3,
      title: "Bollywood Beats",
      host: "Ranveer Singh",
      image:
        "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1200&auto=format&fit=crop",
      desc: "Bollywood gossip, songs and upcoming blockbuster movies.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      <div
        className="h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/e0/78/c4/e078c417892c8e5337dd5fe1113972d3.jpg')",
        }}
      >
        <div className="bg-black/70 p-10 rounded-3xl text-center max-w-2xl shadow-2xl">
          <h1 className="text-5xl font-bold mb-4">Movie Podcast Hub</h1>
          <p className="text-gray-300 text-lg mb-6">
            Explore trending movie podcasts, reviews, cinema news and fan theories.
          </p>

          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-lg font-semibold transition">
            Explore Podcasts
          </button>
        </div>
      </div>

      <div className="px-6 md:px-16 py-14">
        <h2 className="text-3xl font-bold mb-10">Trending Podcasts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={podcast.image}
                alt={podcast.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{podcast.title}</h3>
                <p className="text-red-400 mb-3">Host: {podcast.host}</p>
                <p className="text-gray-400 text-sm leading-6 mb-5">
                  {podcast.desc}
                </p>

                <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition">
                  Listen Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="border-t border-zinc-800 py-6 text-center text-gray-500 text-sm">
        © 2026 Movie Podcast Hub • Built
      </footer>
    </div>
  );
}


 