import React from "react";
import { Link } from "react-router-dom";

const events = [
  {
    title: "1ʳᵉ session Arduino – 2 décembre 2023",
    description:
      "Formation Arduino UNO par le président du club CRIOT. Introduction à la carte, programmation via Tinkercad. Les participants ont conçu des projets simples de manière autonome. Retours très positifs.",
  },
  {
    title: "2ᵉ session Arduino – 9 décembre 2023",
    description:
      "Session pratique avec équipements réels : boucles, conditions, configuration de la carte. Le projet LED a permis de passer de la théorie à la programmation avancée.",
  },
  {
    title: "CRIOT-LAB – 9 mars",
    description:
      "Lancement de CRIOT-LAB : formation en gestion de projet, atelier d'idéation. Créativité et esprit d’entreprise stimulés. Le club devient un incubateur d’idées innovantes.",
  },
  {
    title: "Journée IA – 20 mars",
    description:
      "Événement IA dans le cadre de la semaine de l’entrepreneuriat universitaire. Formations, ateliers et invités d’honneur. Une journée immersive et inspirante autour de l’intelligence artificielle.",
  },
  {
    title: "Atelier au collège Ettahadi – 25 mai",
    description:
      "Succès total ! Initiation des collégiens à la robotique et à l’IA. Construction et programmation de robots, créativité en action. Une journée mémorable pour les jeunes esprits curieux.",
  },
];

export default function Activites() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/dark bleu.jpg')" }}
    >
      
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 bg-black bg-opacity-60 shadow-md z-50">
              <img src="/logogear.png" alt="Logo CRIOT" className="h-20" />
              <nav className="space-x-6 text-sm font-bold text-white">
                            <a href="/" className="hover:text-blue-500"><i>HOME</i></a>
                            <Link to="/Historique">
                            <a href="/historique" className="hover:text-blue-500"><i>HISTORIQUE</i></a>
                            </Link>
                           
                            <Link to="/MembresClub">
                            <a href="/membres" className="hover:text-blue-500"><i>MEMBRES</i></a>
                            </Link>
                            <a href="/activites" className="hover:text-blue-500"><i>ACTIVITÉS</i></a>
                          </nav>
            </header>

      
      <main className="pt-32 px-4">
        <h1 className="text-4xl font-bold text-center text-indigo-300 mb-12 drop-shadow">
          Événements du Club CRIOT
        </h1>
        <section className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-transparent bg-opacity-90 text-white-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2 text-blue-800">{event.title}</h2>
              <p className="text-sm leading-relaxed">{event.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
