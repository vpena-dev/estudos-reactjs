import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components-examples/Home';
import Sobre from './components-examples/Sobre';
import Header from './components-examples/Header';
import Login from './components-examples/Login';
import Produto from './components-examples/Produto';
import PageNotFound from './components-examples/PageNotFound';
import ProdutoDescricao from './components-examples/ProdutoDescricao';
import ProdutoAvaliacao from './components-examples/ProdutoAvaliacao';
import ProdutoCustomizado from './components-examples/ProdutoCustomizado';

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
