import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">

      
      <section className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/yad.mp4" type="video/mp4" />
        </video>

        
        <div className="relative z-10 h-full flex flex-col">
          
          <header className="flex justify-between items-center px-8 py-6 bg-black bg-opacity-60 shadow-md">
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

          
          <div className="flex-grow flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-5xl font-bold mt-2">WELCOME TO OUR CLUB</h1>
            <div className="mt-6 space-x-4">
              <Link to="/Connexion">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded">
                  SE CONNECTER
                </button>
              </Link>
              <Link to="/Inscription">
                <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded">
                  S'INSCRIRE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    
      <section className="text-white py-16 px-8 min-h-screen bg-cover bg-center"style={{ backgroundImage: "url('/dark bleu.jpg')" }}>
      
  <div className="flex flex-col md:flex-row items-center gap-10 bg-transparent p-8 rounded-xl shadow-lg">
    
    <img src="/ala masnaa.jpg" alt="IoT Illustration" className="w-full md:w-1/2 rounded-lg shadow-md" />

    
    <div className="md:w-1/2">
    <h3 className="text-2xl font-semibold text-blue-600 mb-4">C'est quoi l'IoT ?</h3>
      <p className="text-white-700 leading-relaxed">
        L’Internet des Objets (IoT) permet la connexion d’objets à Internet pour échanger des données.
        Il permet l’automatisation des interactions entre appareils **sans intervention humaine**.
        Ses applications sont nombreuses : **maisons intelligentes, santé, villes intelligentes**, etc.
      </p>
      <h4 className="text-lg font-semibold text-green-700 mb-2">Outils et domaines intégrés :</h4>
      <ul className="list-disc list-inside text-white-700 space-y-1">
        <li>Capteurs et dispositifs connectés</li>
        <li>Réseaux de communication</li>
        <li>Cloud computing</li>
        <li>Big Data & analyse de données</li>
        <li>Intelligence artificielle & apprentissage automatique</li>
      </ul>
    </div>
  </div>

  
  <div className="flex flex-col-reverse md:flex-row items-center gap-10 bg-transparent p-8 rounded-xl shadow-lg">
   
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">C'est quoi la Robotique ?</h2>
      <p className="text-white-800 mb-4 leading-relaxed">
        La robotique combine la <strong>mécanique, les systèmes embarqués</strong>, et la <strong>programmation</strong> pour créer des
        machines autonomes. Les robots utilisent des <strong>capteurs</strong> pour comprendre et interagir avec leur environnement.
      </p>
      <h4 className="text-lg font-semibold text-white-700 mb-2">Composantes principales :</h4>
      <ul className="list-disc list-inside text-white-700 space-y-1">
      <li>
          <strong>Mécanique et systèmes embarqués :</strong> conception des structures et moteurs
          pour le mouvement et l’interaction.
        </li>
        <li>
          <strong>Programmation :</strong> développement d’algorithmes pour piloter les robots,
          y compris IA et apprentissage automatique.
        </li>
        <li>
          <strong>Capteurs et perception :</strong> utilisation de capteurs pour analyser et
          réagir à l’environnement de manière autonome.
        </li>
      </ul>
    </div>

    
    <img src="/lid robot.jpg" alt="Robotique Illustration" className="w-full md:w-1/2 rounded-lg shadow-md" />
  </div>

  
  <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Historique du CRIOT</h2>
  
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2">
          <img
            src="/ala khla.jpg"
            alt="Logo Historique"
            className="w-full h-auto rounded-lg shadow-lg object-cover"/>
        </div>

        
        <div className="w-full md:w-1/2 space-y-5 text-white-800 text-lg leading-relaxed">
          <p><strong>Fondation :</strong> Créé en 2021 au sein du département de physique.</p>
          <p><strong>Initiative :</strong> Lancé par le Professeur Mohamed Talea, responsable du laboratoire TI.</p>
          <p><strong>Origine :</strong> Né de l'enthousiasme d'un groupe d'étudiants passionnés par la technologie.</p>
          <p><strong>Objectif :</strong> Créer une communauté autour de la robotique et de l’IoT.
          </p>
        </div>
      </div>
     
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-12 mt-20">Objectif du CRIOT</h2>
      <div className="max-w-4xl mx-auto space-y-6 text-white-800 text-lg leading-relaxed">
       <ul className="list-disc list-inside text-white-700 space-y-1">
      <li>
          <strong>Communauté d'innovation technologique :</strong> Rassembler des étudiants passionnés par la
          robotique et l'IoT.
        </li>
        <li>
          <strong> Développement de compétences techniques :</strong>  Ateliers, projets collaboratifs et compétitions
          pour favoriser l'apprentissage.
        </li>
        <li>
          <strong>Préparation professionnelle :</strong>Renforcement des compétences pour saisir les opportunités dans des secteurs en pleine croissance.

        </li>
      </ul>



       </div>
      <Footer/>


      </section>  
      
    </div>
  );
}
