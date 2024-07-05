import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Produtos from './components/Produtos';

const App = () => {
  const { pathname } = window.location;
  let Pagina;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <>
      <Header />
      <Pagina />
    </>
  );
};

export default App;
