import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import "./MaesApp.css"; // Este debe ser el último

export default function MaesApp() {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-yellow-500 min-h-screen text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Noticias Section */}
      <NoticiasSection />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-black py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="/images/maeslogo.png" alt="Lakers Logo" className="h-12 object-contain" />
        <span className="text-xl font-bold">Los Lakers</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {["Noticias", "Equipo", "Calendario", "Entradas", "Tienda"].map((link) => (
          <a key={link} href="#" className="hover:text-yellow-400 transition duration-300">
            {link}
          </a>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4">
        {["facebook", "x-twitter", "instagram", "youtube"].map((icon) => (
          <a key={icon} href="#" className="text-2xl hover:text-yellow-400 transition duration-300">
            <i className={`fab fa-${icon}`}></i>
          </a>
        ))}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-extrabold">Maes Sport</h1>
      <p className="text-lg mt-3">Todo tu contenido de los Lakers en español.</p>
    </section>
  );
}

function NoticiasSection() {
  const noticias = [
    {
      title: "Cumpleaños #23 de la Familia Maes",
      description: "Hoy la alegría reina en toda la familia Maes...",
      link: "#",
    },
    {
      title: "Feliz Día del Padre",
      description: "Gracias papás que educan a sus hijos...",
      link: "#",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Últimas Noticias</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {noticias.map((noticia, index) => (
          <NewsCard key={index} {...noticia} />
        ))}
      </div>
    </section>
  );
}

function NewsCard({ title, description, link }) {
  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="mt-2">{description}</p>
      <a href={link} className="text-purple-700 font-bold mt-3 inline-block hover:underline">
        Leer más
      </a>
    </div>
  );
}
 