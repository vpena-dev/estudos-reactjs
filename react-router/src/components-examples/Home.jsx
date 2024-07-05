import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';

const Home = () => {
  return (
    <div>
      <Head title="Home" description="Essa é a descrição da Home" />
      <h1>Home</h1>
      <p>Essa é a home</p>
      <ul>
        <li>
          <Link to="produto/notebook">Notebook</Link>
        </li>
        <li>
          <Link to="produto/smartphone">Smartphone</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
