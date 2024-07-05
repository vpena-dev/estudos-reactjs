import React from 'react';
import { NavLink, useParams, Outlet } from 'react-router-dom';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <ul style={{ display: 'flex', gap: '5rem' }}>
          <li>
            <NavLink to="" end>
              Descrição
            </NavLink>
          </li>
          <li>
            <NavLink to="avaliacao" end>
              Avaliações
            </NavLink>
          </li>
          <li>
            <NavLink to="customizado" end>
              Customizar
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
