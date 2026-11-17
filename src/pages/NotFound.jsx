import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="pagina">
      <h1>404 — Página não encontrada</h1>
      <p>O endereço informado não corresponde a uma página deste site.</p>
      <div className="links">
        <Link to="/">Voltar para Home</Link>
      </div>
    </section>
  );
}
