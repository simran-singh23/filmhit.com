import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import MovieDetail from "./pages/MovieDetail";
import Success from "./pages/Success";
import MovieSection from "./Components/MovieSection";
import Explore from "./pages/Explore";
import LearnMore from "./pages/LearnMore";
import Footer from "./Components/footer";
import Blog from "./pages/Blog";
import Podcast from "./pages/Podcast";
import Careers from "./pages/Careers";
import Newsroom from "./pages/Newsroom";
import New from "./pages/New";
import Play from "./pages/Play";
import Top from "./pages/Top";
import Movies from "./pages/Movies";
import Trending from "./pages/Trending";
import upcoming from "./pages/Upcoming";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
               <Route path="/movie/:id" element={<MovieDetail />} />
               
                  <Route path="/success" element={<Success />} />
                <Route path="/explore" element={<Explore />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/new" element={<New />} />
          <Route path="/play" element={<Play />} />
          <Route path="/top" element={<Top />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/upcoming" element={<upcoming />} />
      </Routes>  
        
      <Footer />
    </BrowserRouter>
  );
}

export default App;
