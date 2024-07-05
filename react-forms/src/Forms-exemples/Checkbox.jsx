import React from 'react';

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const Checkbox = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <div key={cor} style={{ textTransform: 'capitalize' }}>
          <label>
            <input
              type="checkbox"
              onChange={handleChange}
              checked={handleChecked(cor)}
              value={cor}
            />
            {cor}
          </label>
        </div>
      ))}
    </form>
  );
};

export default Checkbox;
