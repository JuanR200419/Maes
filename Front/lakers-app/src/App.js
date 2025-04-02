import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from 'react-dom/client';
import './index.css';

// Corrected paths for media files
import prinVideo from "./assets/animation.mp4";
import noticia1 from "./assets/Images/noticias/padre.jpg";
import noticia2 from "./assets/Images/noticias/orgullo.jpg";
import noticia3 from "./assets/Images/noticias/profe.jpg";
import noticia4 from "./assets/Images/noticias/targeta.jpeg";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-yellow-500 min-h-screen text-white">
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
    <nav className="bg-black py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo como video */}
      <div className="flex items-center space-x-3">
        <video
          src={prinVideo}
          autoPlay
          loop
          muted
          className="h-12 w-auto object-contain"
        />
        <span className="text-xl font-bold text-yellow-400">Maes Sport</span>
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
          <button key={icon} className="hover:text-white transition">
            <i className={`fab fa-${icon} text-lg text-yellow-400`}></i>
          </button>
        ))}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative text-center py-24 bg-white">
      <h1 className="text-6xl font-extrabold text-purple-500 z-10 relative"></h1>
      <div className="absolute inset-0 flex justify-center items-center">
        <video
          src={prinVideo}
          autoPlay
          loop
          muted
          className="w-full max-w-[340px] h-auto object-contain"
        />
      </div>
      <div className="relative z-10">
        <p className="text-lg mt-3 text-black"></p>
      </div>
    </section>
  );
}

function NoticiasSection() {
  const noticias = [
    {
      title: "Cumpleaños #23 de la Familia Maes",
      date: "31 de Julio de 2021",
      description:
        "Que hoy la alegría reine en toda la familia Maes deportistas, padres de familia, entrenadores, preparadores físicos, equipo de trabajo, exalumnos, amigos y a todos los que han creído en nuestro camino.",
      image: noticia1,
      link: "#",
    },
    {
      title: "Feliz Día del Padre",
      date: "20 de Junio de 2021",
      description:
        "Gracias papás que educan a sus hijos para ser los número uno en valores, actitudes y en la vida. Gracias por ser parte de esta enorme familia, de la Familia Maes.",
      image: noticia2,
      link: "#",
    },
    {
      title: "Profe Feliz Cumpleaños",
      date: "23 de Junio de 2021",
      description:
        "¡Feliz cumpleaños profe Manuel! Gracias por sus enseñanzas, por ser un amigo, guía y ejemplo para todos nosotros.",
      image: noticia3,
      link: "#",
    },
    {
      title: "Orgullo Maes",
      date: "5 de Junio de 2021",
      description:
        "Te admiramos mucho, a pesar de la adversidad nunca dejaste de creer en ti. Un abrazo y todo nuestro apoyo.",
      image: noticia4,
      link: "#",
    },
  ];

  return (
    <section className="w-full px-6 py-10 bg-purple-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
        Últimas Noticias
      </h2>
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticias.map((noticia, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <img
              src={noticia.image}
              alt={noticia.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-purple-900">
                {noticia.title}
              </h3>
              <p className="text-sm text-gray-500">{noticia.date}</p>
              <p className="text-gray-700 mt-2">{noticia.description}</p>
              <button
                className="text-purple-700 font-bold mt-3 inline-block hover:underline"
              >
                Leer más...
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
