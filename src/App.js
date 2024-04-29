import React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Realisations from './pages/Realisations';
import Services from './pages/Services';
import Remote from "./pages/Remonter";
import Api from "./pages/Api";
import Apropos from "./pages/Apropos";
import Mentions from "./pages/Mentions";

function App() {

return (
  <div className="App">
    <header className="App-header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid ">
          <h2>JOHN DOE</h2>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <Link className="link" to="/">ACCUEIL</Link>
            </li>
            <li class="nav-item">
            <Link className="link"  to="/services">SERVICES</Link>
            </li>
            <li class="nav-item">
            <Link className="link" to="/realisations">REALISATIONS</Link>
            </li>
            <li class="nav-item">
            <Link className="link" to="/blog">BLOG</Link>
            </li>
            <li class="nav-item">
            <Link className="link" to="/contact">ME CONTACTER</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/realisations" element={<Realisations />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/apropos" element={<Apropos />}></Route>
        <Route path="/mentions" element={<Mentions />}></Route>
      </Routes>
  <footer className="App-footer">
    <div className="row">
      <div id="contact-info" className="col-12 col-sm-6 col-lg-3">
        <Api />
      </div>

      <div id="useful-links" className="col-12 col-sm-6 col-lg-3">
        <h4>Liens utiles</h4>
        <ul>
          <li><Link className="text" to="/">Accueil</Link></li>
          <li><Link className="text" to="/apropos">À propos</Link></li>
          <li><Link className="text" to="/services">Services</Link></li>
          <li><Link className="text" to="/contact">Me contacter</Link></li>
          <li><Link className="text" to="/mentions">Mentions légales</Link></li>
        </ul>
      </div>

      <div id="latest-projects" className="col-12 col-sm-6 col-lg-3">
        <h4>Dernières Réalisations</h4>
        <ul>
          <li><a className="text" href="/realisations">Fresh food</a></li>
          <li><a className="text" href="/realisations">Restaurant Akira</a></li>
          <li><a className="text" href="/realisations">Espace bien-être</a></li>
        </ul>
      </div>

      <div id="latest-posts" className="col-12 col-sm-6 col-lg-3">
        <h4>Mes derniers Articles</h4>
        <ul>
          <li><a className="text" href="/blog">Coder son site en HTML/CSS</a></li>
          <li><a className="text" href="/blog">Vendre ses produits sur le web</a></li>
          <li><a className="text" href="/blog">Se positionner sur Google</a></li>
        </ul>
      </div>
      </div>
        <div className="footer-bottom">
        <Remote />
      </div>
   </footer>

  </div>
  );
}

export default App;
