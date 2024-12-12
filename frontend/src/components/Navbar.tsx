import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/add-tenis">Añadir Tenis</Link>
      <Link to="/favorites">Favoritas</Link>
      <Link to="/users">Usuarios</Link>
      <Link to="/register-user">Registrar Usuarios</Link>
    </nav>
  );
};

export default Navbar;