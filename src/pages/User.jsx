import React from 'react';
import { Link, useParams } from 'react-router-dom';

const usuarios = [
  { id: '1', nome: 'Ana Silva', interesse: 'Desenvolvimento web' },
  { id: '2', nome: 'Bruno Santos', interesse: 'Interfaces com React' },
];

export default function User() {
  const { id } = useParams();
  const usuario = usuarios.find((item) => item.id === id);

  return (
    <section className="pagina">
      <h1>Perfil de usuário</h1>
      <p><strong>Identificador:</strong> {id}</p>
      {usuario ? (
        <>
          <h2>{usuario.nome}</h2>
          <p><strong>Interesse:</strong> {usuario.interesse}</p>
        </>
      ) : (
        <p>Usuário não encontrado.</p>
      )}
      <div className="links">
        <Link to="/user/1">Ver usuário 1</Link>
        <Link to="/user/2">Ver usuário 2</Link>
        <Link to="/">Voltar para Home</Link>
      </div>
    </section>
  );
}
