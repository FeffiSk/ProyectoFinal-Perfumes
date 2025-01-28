import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars size={30} color="white" />
      </div>

      {isMenuOpen && (
        <div className="menu">
          <Link to="/categoria/acuatico" className="menu-link">
            Acuático
          </Link>
          <Link to="/categoria/especiado" className="menu-link">
            Especiado
          </Link>
          <Link to="/categoria/amaderado" className="menu-link">
            Amaderado
          </Link>
          <Link to="/categoria/fresco" className="menu-link">
            Fresco
          </Link>
          <Link to="/categoria/oriental" className="menu-link">
            Oriental
          </Link>
        </div>
      )}

      <div className="desktop-menu"> 
        <Link to="/" className="menu-link">
          Inicio
        </Link>
        <Link to="/about" className="menu-link">
          Acerca de
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;