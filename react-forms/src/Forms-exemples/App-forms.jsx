import React from 'react';
import Input from './components/Input';
import Select from './components/Select';
import Radio from './components/Radio';
import Checkbox from './components/Checkbox';

const App = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [color, setColor] = React.useState('');
  const [fruit, setFruit] = React.useState('');
  const [language, setLanguage] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={['Li e aceito os termos']}
        value={termos}
        setValue={setTermos}
      />
      <h2>Checkbox</h2>
      <Checkbox
        options={['JavaScript', 'PHP', 'Ruby']}
        value={language}
        setValue={setLanguage}
      />
      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={color} setValue={setColor} />

      <h2>Frutas</h2>
      <Radio
        options={['Laranja', 'Pera', 'Uva', 'Maçã']}
        value={fruit}
        setValue={setFruit}
      />

      <Select
        options={['Smartphone', 'Notebook']}
        value={produto}
        setValue={setProduto}
      />
      <Input id="name" label="Nome" value={name} setValue={setName} required />
      <Input
        type="email"
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
      />
      <Input
        type="password"
        id="password"
        label="Password"
        value={password}
        setValue={setPassword}
      />

      <button>Enviar</button>
    </form>
  );
};
export default App;
