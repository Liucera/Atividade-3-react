import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section className="pagina">
      <h1>Contato</h1>
      <p>Esta página apresenta um contato de exemplo para o site.</p>
      <p><strong>E-mail:</strong> contato@example.com</p>
      <div className="links">
        <Link to="/">Voltar para o início</Link>
        <Link to="/sobre">Ir para Sobre</Link>
      </div>
    </section>
  );
}
