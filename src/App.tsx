import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Events from './components/sections/Events';
import Resources from './components/sections/Resources';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Home from "./components/sections/Home"
import Mentors from "./components/sections/Mentors"
import Gallery from './components/sections/Gallery';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <main>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<About/>}/>
              <Route path="/projects" element={<Projects />} />
              <Route path="/events" element={<Events />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          <Footer/>
        </main>
      </div>
    </Router>
  );
}

export default App;