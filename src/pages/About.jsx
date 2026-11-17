import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="pagina">
      <h1>About</h1>
      <p>Este site reúne páginas de apresentação, contato e perfis de exemplo.</p>
      <p>O cabeçalho e o rodapé são compartilhados entre as páginas.</p>
      <div className="links">
        <Link to="/">Voltar para Home</Link>
        <Link to="/contact">Ir para Contact</Link>
      </div>
    </section>
  );
}
