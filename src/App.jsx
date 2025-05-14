import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Link, Routes, Route } from "react-router-dom";
import Connexion from './pages/Connexion';
import Activites from "./pages/Activites";
import MembresClub from "./pages/MembresClub";
import Historique from "./pages/HISTOIRE";
import Inscription from "./pages/INSCRI";
import Navbar from "./components/Navbar";

function App() {
 
  return (
<div className="min-h-screen">
      <Routes>
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />}/>
        <Route path="/MembresClub" element={<MembresClub/>}/>
        <Route path="/Historique" element={<Historique/>}/>
        <Route path="/Activites" element={<Activites />}/>
      </Routes>
    </div>
  );
}

export default App;
