import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="cabecalho">
      <div className="container">
        <span className="marca">Meu site de estudos</span>
        <nav aria-label="Navegação principal">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
