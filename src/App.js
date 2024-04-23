import React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Realisations from './pages/Realisations';
import Services from './pages/Services';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>JOHN DOE</h2>
        <nav className="App-nav">
          <Link className="link" to="/">ACCUEIL</Link> 
          <Link className="link" to="/services">SERVICES</Link>
          <Link className="link" to="/realisations">REALISATIONS</Link>
          <Link className="link" to="/blog">BLOG</Link>
          <Link className="link" to="/contact">ME CONTACTER</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/realisations" element={<Realisations />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>

      <footer className="App-footer">
        <div className="columns">
          <div className="footer-column">
            <h4>John Doe</h4>
            <p>Adresse: 123 Rue, Ville, Pays</p>
            <p>Téléphone: +1234567890</p>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Liens utiles</h4>
            <ul>
              <li><Link className="text"  to="/">Accueil</Link></li>
              <li><Link className="text"  to="/services">À propos</Link></li>
              <li><Link className="text"  to="/services">Services</Link></li>
              <li><Link className="text"  to="/contact">Me contacter</Link></li>
              <li><Link className="text"  to="/mentions">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Dernières Réalisations</h4>
            <ul>
              <li><a className="text" href="/fresh">Fresh food</a></li>
              <li><a className="text" href="/fresh">Restaurant Akira</a></li>
              <li><a className="text" href="/fresh">Espace bien-être</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Mes derniers Articles</h4>
            <ul>
              <li><a className="text" href="/fresh">Coder son site en HTML/CSS</a></li>
              <li><a className="text" href="/fresh">Vendre ses produits sur le web</a></li>
              <li><a className="text" href="/fresh">Se positionner sur Google</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} John Doe. Tous droits réservés.</p>
          <a href="#top">Remonter en Haut</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
