import React from "react";
import "./LakersApp.css"; // Archivo de estilos para LakersApp

export default function LakersApp() {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-yellow-500 min-h-screen text-white">
      {/* Navbar */}
      <nav className="bg-black py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo-lakers.png" alt="Lakers Logo" className="h-12" />
          <span className="text-xl font-bold ml-3">Los Lakers</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-400">Noticias</a>
          <a href="#" className="hover:text-yellow-400">Equipo</a>
          <a href="#" className="hover:text-yellow-400">Calendario</a>
          <a href="#" className="hover:text-yellow-400">Entradas</a>
        </div>
        <div className="flex space-x-4">
          <a href="#"><i className="fab fa-facebook text-lg"></i></a>
          <a href="#"><i className="fab fa-x-twitter text-lg"></i></a>
          <a href="#"><i className="fab fa-instagram text-lg"></i></a>
          <a href="#"><i className="fab fa-youtube text-lg"></i></a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold">Los Lakers</h1>
        <p className="text-lg mt-3">Todo tu contenido de Maes en español.</p>
      </section>

      {/* Noticias */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Últimas Noticias</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-xl">Cumpleaños #23 de la Familia Maes</h3>
            <p className="mt-2">Hoy la alegría reina en toda la familia Maes...</p>
            <a href="#" className="text-purple-700 font-bold mt-3 inline-block">Leer más</a>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-xl">Feliz Día del Padre</h3>
            <p className="mt-2">Gracias papás que educan a sus hijos...</p>
            <a href="#" className="text-purple-700 font-bold mt-3 inline-block">Leer más</a>
          </div>
        </div>
      </section>
    </div>
  );
}
