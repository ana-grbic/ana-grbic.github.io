import { useState } from 'react';
import './App.css'
import Home from './pages/Home/home.jsx'
import About from './pages/About/about.jsx'
import Development from './pages/Development/development.jsx'
import Creative from './pages/Creative/creative.jsx'
import { NavLink, BrowserRouter, Route, Routes } from 'react-router-dom'
import Rio from './components/Rio/Rio';
import emptyCage from './assets/emptycage.png';
import fullCage from './assets/fullcage.png';

const randomTilt = () =>
  `${Math.random() > 0.5 ? 2 : -2 * (Math.random() * 0.5 + 0.5)}deg`;

function App() {
  const [rioInCage, setRioInCage] = useState(false);

  return (
    <BrowserRouter>
      <div className="body">
        <div className="overlay-box">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/development" element={<Development key={Date.now()} />} />
              <Route path="/creative" element={<Creative />} />
            </Routes>
          </div>
          <nav className="navigation schoolbell-regular">
            <NavLink to="/" style={{ "--tilt": randomTilt() }}>Home</NavLink>
            <NavLink to="/about" style={{ "--tilt": randomTilt() }}>Who Am I</NavLink>
            <NavLink to="/development" style={{ "--tilt": randomTilt() }}>Development</NavLink>
            <NavLink to="/creative" style={{ "--tilt": randomTilt() }}>Creative</NavLink>
          </nav>
          {!rioInCage && <Rio />}

          <img
            src={rioInCage ? fullCage : emptyCage}
            alt="Cage toggle"
            className="cage-toggle"
            onClick={() => setRioInCage(prev => !prev)}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
