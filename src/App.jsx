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
      </Routes>  
        
            
    </BrowserRouter>
  );
}

export default App;
