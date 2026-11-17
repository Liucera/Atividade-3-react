import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="pagina">
      <h1>Início</h1>
      <p>Bem-vindo ao meu site de estudos. Explore as páginas pelo menu ou pelos atalhos abaixo.</p>
      <div className="links">
        <Link to="/sobre">Conhecer o site</Link>
        <Link to="/contato">Ver contato</Link>
      </div>
      <h2>Perfis de exemplo</h2>
      <div className="links">
        <Link to="/usuario/1">Perfil de Ana</Link>
        <Link to="/usuario/2">Perfil de Bruno</Link>
      </div>
    </section>
  );
}
