import React from "react";
import "./App.css"; // Si usas Tailwind, no es necesario este import

function App() {
  return (
    <div className="App">
      <LakersApp />
    </div>
  );
}

function LakersApp() { 
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="logo-lakers.png" alt="Lakers Logo" height="50" />
        </div>
        <div className="nav-links">
          <a href="#">Noticias</a>
          <a href="#">Team</a>
          <a href="#">Schedule</a>
          <a href="#">Tickets</a>
          <a href="#">Laker Girls</a>
          <a href="#">Community</a>
          <a href="#">Store</a>
          <a href="#">Connect</a>
          <a href="#">Careers</a>
        </div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </nav>

      {/* Sección principal */}
      <section className="hero">
        <h1>Maes Sport</h1>
        <p>Todo tu contenido de los Lakers en español.</p>
      </section>

      {/* Sección de contenido */}
      <section className="section">
        <h2>Últimas noticias</h2>
        <p>Aquí puedes agregar tarjetas con noticias o contenido relacionado.</p>
      </section>
    </div>
  );
}

export default App;
