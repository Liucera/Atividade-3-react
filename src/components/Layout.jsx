import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <main className="container conteudo">
        <React.Suspense fallback={<p role="status">Carregando página...</p>}>
          <Outlet />
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
}
