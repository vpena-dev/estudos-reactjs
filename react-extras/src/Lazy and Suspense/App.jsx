import React from 'react';
const Contato = React.lazy(() =>
  import('./Lazy and Suspense/components/Contato')
);

function App() {
  const [active, setActive] = React.useState(null);

  return (
    <div>
      {active && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <br />
      <button onClick={() => setActive(!active)}>
        {active ? 'Desativar' : 'Ativar'}
      </button>
    </div>
  );
}

export default App;
