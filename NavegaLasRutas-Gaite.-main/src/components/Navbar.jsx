import { Link } from "react-router-dom";
import { useState, useContext } from "react";  // Importamos useContext
import { FaBars } from "react-icons/fa";
import './Navbar.css';
import { MyContext } from '../context';  // Importamos el contexto

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState(""); // Estado local para guardar el nombre de usuario

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { user, login, logout } = useContext(MyContext);  // Accedemos al contexto

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    if (username.trim() !== "") {
      login(username);  // Iniciar sesión con el nombre ingresado
      setUsername("");  // Limpiamos el campo de texto después de iniciar sesión
    } else {
      alert("Por favor ingrese un nombre de usuario.");
    }
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

        {/* Mostrar el nombre del usuario o un formulario de inicio de sesión */}
        <div className="user-info">
          {user ? (
            <>
              <span>Bienvenido, {user.name}</span>
              <button onClick={logout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}  // Actualizamos el estado local del nombre
                placeholder="Nombre de usuario"
              />
              <button onClick={handleLogin}>Iniciar sesión</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
