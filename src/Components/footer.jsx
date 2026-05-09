import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3] px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto bg-white p-10 rounded-sm">

  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <span className="text-orange-500 text-4xl">✿</span>
                filmyhit
            </h1>

            <div className="mt-28 text-6xl">
              🌼🌸🌻🌷
            </div>
          </div>

        
          <div>
            <h2 className="text-2xl font-semibold mb-5">
              Our Company
            </h2>

            <ul className="space-y-4 text-gray-600">

              <li>
                <Link to="/blog" className="hover:text-black">
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/podcast" className="hover:text-black">
                  Podcast
                </Link>
              </li>

              <li>
                <Link to="/careers" className="hover:text-black">
                  Careers
                </Link>
              </li>

              <li>
                <Link to="/newsroom" className="hover:text-black">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>

      
          <div>
            <h2 className="text-2xl font-semibold mb-5">
              Products
            </h2>

            <ul className="space-y-4 text-gray-600">
             <li>
  <Link to="/movies" className="hover:text-black">
    Movies
  </Link>
</li>

<li>
  <Link to="/tvshows" className="hover:text-black">
    TV Shows
  </Link>
</li>

<li>
  <Link to="/trending" className="hover:text-black">
    Trending
  </Link>
</li>

<li>
  <Link to="/Top" className="hover:text-black">
    Top Rated
  </Link>
</li>

<li>
  <Link to="/upcoming" className="hover:text-black">
    Upcoming
  </Link>
</li>

<li>
  <Link to="/popular" className="hover:text-black">
    Popular
  </Link>
</li>

                
              
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-5">
              Contact
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li>
                <Link to="/contact" className="hover:text-black">
                  FAQs
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-black">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-black">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

    
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-5">

          <p className="text-gray-500 text-sm">
            ©2024 filmyhit. All rights reserved
          </p>

        
          <div className="flex items-center gap-5 text-lg">

            <Link
              to="/"
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center"
            >
              F
            </Link>

            <Link
              to="/"
              className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center"
            >
              in
            </Link>

            <Link
              to="/"
              className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center"
            >
              ▶
            </Link>

            <Link
              to="/"
              className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center"
            >
              ♫
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}