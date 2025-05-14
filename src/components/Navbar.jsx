import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
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
  );
}
