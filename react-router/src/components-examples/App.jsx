import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Header from './components/Header';
import Login from './components/Login';
import Produto from './components/Produto';
import PageNotFound from './components/PageNotFound';
import ProdutoDescricao from './components/ProdutoDescricao';
import ProdutoAvaliacao from './components/ProdutoAvaliacao';
import ProdutoCustomizado from './components/ProdutoCustomizado';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Produto />}>
          <Route path="" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
