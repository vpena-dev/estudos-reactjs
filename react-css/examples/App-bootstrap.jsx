import Card from 'react-bootstrap/Card';

// Lembrar de importar o bootstrap no main.jsx:
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Card bg="dark" text="white" className="m-5" style={{ maxWidth: '18rem' }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>
          Esse é um notebook de 1Tb, 16GB de RAM e placa de vídeo de 16VRAM
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default App;
