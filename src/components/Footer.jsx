import { Mail, Instagram, Facebook } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-4 z-50 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-2 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Club CRIOT. Tous droits réservés.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:contact@clubcriot.com" className="hover:text-indigo-400 transition">
            <Mail size={20} />
          </a>
          <a href="https://instagram.com/clubcriot" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <Instagram size={20} />
          </a>
          <a href="https://facebook.com/clubcriot" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
