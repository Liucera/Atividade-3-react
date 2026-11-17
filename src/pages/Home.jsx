import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="pagina">
      <h1>Home</h1>
      <p>Bem-vindo ao meu site de estudos. Explore as páginas pelo menu ou pelos links abaixo.</p>
      <div className="links">
        <Link to="/about">Conhecer o site</Link>
        <Link to="/contact">Ver contato</Link>
      </div>
      <h2>Perfis de exemplo</h2>
      <div className="links">
        <Link to="/user/1">Perfil de Ana</Link>
        <Link to="/user/2">Perfil de Bruno</Link>
      </div>
    </section>
  );
}
