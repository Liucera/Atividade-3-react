import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="cabecalho">
      <div className="container">
        <span className="marca">Meu site de estudos</span>
        <nav aria-label="Navegação principal">
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
