import { Mail, Phone, BadgeInfo, GraduationCap } from "lucide-react";

const membres = [
  {
    nom: " BOUGA BOUCHRA ",
    position: "Présidente",
    parcours: "Master Ti  ",
    codeApogee: " 19501973",
    contact: "+212 6 51 96 08 85",
    email: "bouga.bouchra@gmail.com",
    image: "/BOUGA BOUCHRA.png",
  },
  {
    nom: " Abdessamad Morad",
    position: "Vice president ",
    parcours: " Master Ti ",
    codeApogee: "23515813",
    contact: "+212  7 62 79 57 72",
    email: "abdessamad.morad01@gmail.com",
    image: "/Abdessamad Morad.png",
  },
  {
    nom: "Soufiane Arybou",
    position: "Trésories",
    parcours: " Master Ti ",
    codeApogee: "21512921",
    contact: "+212 6 55 81 82 98",
    email: "soufianearybou@gmail.com",
    image: "/Soufiane Arybou.png",
  },
  {
    nom: "nouhaila khachtaoui",
    position: "Secrétaire générale",
    parcours: " Master Ti ",
    codeApogee: "23514019",
    contact: "+212 6 16 87 94 16",
    email: "nouhailakhachtaoui5@gmail.com",
    image: "/nouhaila khachtaoui.png",
  },
  {
    nom: " Myriem BENHADDOU",
    position: "Secrétaire générale",
    parcours: " Master Ti ",
    codeApogee: "23513932",
    contact: "+212 6 77 05 10 08",
    email: "benhaddoumyriem1@gmail.com",
    image: "/Myriem BENHADDOU.png",
  },
  {
    nom: "Aziza NASYF",
    position: "Responsable de communication",
    parcours: "Master Ti",
    codeApogee: "654321",
    contact: "+212 6 25 38 97 37",
    email: "azizanasyf6@gmail.com",
    image: "/Aziza NASYF.png",
  },
  {
    nom: " Hartal sanaa",
    position: "Responsable de communication",
    parcours: "Master GME",
    codeApogee: "20503065",
    contact: "+212 6 60 07 39 43",
    email: "hartalsanaa@gmail.com",
    image: "/Sanaa Hartal.png",
  },
  {
    nom: " El haouzi salma",
    position: "Responsable de communication",
    parcours: "Mastre TI",
    codeApogee: "21509722",
    contact: "+212 7 71 04 15 86",
    email: "salma123elhaouzi@gmail.com",
    image: "/salma el haouzi.png",
  },
  {
    nom: " Walid Rachid",
    position: "Responsable du matériel",
    parcours: " Master TI ",
    codeApogee: "20506607",
    contact: "+212 6 63 32 16 91",
    email: "rachidwalid427@gmail.com",
    image: "/walid rachid.png",
  },
  {
    nom: " EL HANSALI AYMAN",
    position: "Responsable du matériel",
    parcours: "Master TI",
    codeApogee: "21509248",
    contact: "+212 6 34 75 12 99",
    email: "aymanhansali2004@gmail.com",
    image: "/EL HANSALI AYMAN.png",
  },
  {
    nom: "moujahid Latifa",
    position: "Cellule des événements",
    parcours: "Master TI",
    codeApogee: "20502826",
    contact: "+212 7 70 50 00 82",
    email: "latifamoujahud@gmail.com",
    image: "/moujahid Latifa.png",
  },
  {
    nom: " METAHI Imad",
    position: "Cellule des événements",
    parcours: "Master TI",
    codeApogee: "21513350",
    contact: "+212 6 37 84 64 78",
    email: "metahi.imad@gmail.com",
    image: "/Imad Metahi.png",
  },
  {
    nom: " Aymen abid ",
    position: "Cellule des événements",
    parcours: "Master TI",
    codeApogee: "21502539",
    contact: "+212 6 21 50 25 39",
    email: "aymenabid084@gmail.com",
    image: "/Aymen Abid.png",
  },
  {
    nom: "Mounir  BOUGUI ",
    position: "Designer",
    parcours: "Master TI",
    codeApogee: "20515871",
    contact: "+212 6 65 18 27 36",
    email: "bouguimounir875@gmail.com",
    image: "/mounir bougui.png",
  },
  {
    nom: "Boutaina Soultana  ",
    position: "Responsable RSE",
    parcours: " Master TI",
    codeApogee: "20506565",
    contact: "+212 7 06 71 12 76",
    email: "boutaina2002maroc@gmail.com",
    image: "/Boutaina Soultana.png",
  },
  {
    nom: "Nait ilyas",
    position: "Responsable RSE",
    parcours: " Master TI",
    codeApogee: "21502340",
    contact: "+212 7 66 61 06 44",
    email: "naitkhermacheilyas@gmail.com",
    image: "/nait khermache ilyas.png",
  },
];

export default function MembresClub() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/dark bleu.jpg')" }}>
      
    
    <header className="flex justify-between items-center px-8 py-6 bg-black bg-opacity-60 shadow-md fixed w-full top-0 z-10">
      <img src="/logogear.png" alt="Logo CRIOT" className="h-20" />
      <div className="space-x-6 text-sm font-bold text-white">
        <a href="/" className="hover:text-blue-500">HOME</a>
        <a href="/historique" className="hover:text-blue-500">HISTORIQUE</a>
        <a href="/membres" className="hover:text-blue-500">MEMBRES</a>
        <a href="/activites" className="hover:text-blue-500">ACTIVITÉS</a>
      </div>
    </header>
    <div className="pt-40 px-6 bg-transparent-900 text-white">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
        Membres du CRIOT
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {membres.map((membre, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/40 transition duration-300"
          >
            <img
              src={membre.image}
              alt={`Photo de ${membre.nom}`}
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500 mb-4"
            />
            <h3 className="text-xl font-bold text-center mb-2">{membre.nom}</h3>
            <p className="text-center text-blue-400 mb-4">{membre.position}</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-300" />
                {membre.parcours}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-300">🎓</span> Code Apogée : {membre.codeApogee}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-300" />
                {membre.contact}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-300" />
                {membre.email}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
