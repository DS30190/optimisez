import React from "react";
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';
import Realisations from './pages/Realisations';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Accueil</Link> 
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="mentions">Mentions</Link>
          <Link to="/realisations">Realisations</Link>
          <Link to="/services">Services</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/mentions" element={<Mentions/>}></Route>
          <Route path="/realisations" element={<Realisations/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
