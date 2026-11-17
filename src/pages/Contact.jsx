import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section className="pagina">
      <h1>Contact</h1>
      <p>Esta página apresenta um contato de exemplo para o site.</p>
      <p><strong>Email:</strong> contato@example.com</p>
      <div className="links">
        <Link to="/">Voltar para Home</Link>
        <Link to="/about">Ir para About</Link>
      </div>
    </section>
  );
}
