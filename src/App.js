import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage/homePage"
import Projects from "./pages/Projects/projects"
import About from "../src/pages/about"
import Contact from "../src/pages/contact"
import DragonBall from "../src/pages/dragonBall"
import Ideals from "../src/pages/iDeals"
import TrackMate from "../src/pages/trackMate"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/projects/dragonBall" element={<DragonBall />}/>
    <Route path="/projects/iDeals" element={<Ideals />}/>
    <Route path="/projects/trackMate" element={<TrackMate />}/>

    </Routes>
    </>
  );
}

export default App;
