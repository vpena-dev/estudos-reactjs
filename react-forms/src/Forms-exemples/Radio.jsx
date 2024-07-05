import React from 'react';

const Radio = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <form>
      <h3>Cores</h3>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'Azul'}
          value="Azul"
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'vermelho'}
          value="vermelho"
        />
        Vermelho
      </label>
      <h3>Produtos</h3>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setProduto(target.value)}
          checked={produto === 'notebook'}
          value="notebook"
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setProduto(target.value)}
          checked={produto === 'smartphone'}
          value="smartphone"
        />
        Smartphone
      </label>
    </form>
  );
};

export default Radio;
