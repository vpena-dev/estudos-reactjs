import React from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.content];
    case 'REMOVE':
      return state.filter((item) => item !== action.content);
    default:
      throw new Error();
  }
}

const Example = () => {
  const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva']);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <button onClick={() => dispatch({ type: 'REMOVE', content: 'Banana' })}>
          Remover Banana
        </button>
        <button onClick={() => dispatch({ type: 'ADD', content: 'Limão' })}>
          Adicionar Limão
        </button>
      </div>
      <br />
      <p>{state}</p>
    </div>
  );
};

export default Example;
