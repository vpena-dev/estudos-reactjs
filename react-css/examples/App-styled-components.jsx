import React from 'react';
import './App.css';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const Button = styled.button`
  background-color: ${({ ativo }) => (ativo ? '#000' : '#fff')};
  color: ${({ ativo }) => (ativo ? '#fff' : '#000')};
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: tomato;
  }
`;

function App() {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
        Compre aqui
      </Button>
      <Title>Meu título</Title>
      <Paragraph>Meu texto é esse</Paragraph>
    </div>
  );
}

export default App;
