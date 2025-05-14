import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Connexion.jpg')" }}>
      
      
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
      

      
      <div className="flex items-center justify-center min-h-screen pt-32 px-4">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Se connecter</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <button className="w-full bg-green-500 p-3 rounded-md text-white hover:bg-green-600">
              Se connecter
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/" className="text-blue-500 hover:underline">Retour à l'accueil</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
