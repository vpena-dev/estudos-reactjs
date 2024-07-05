import Input from './components/Input';
import useForm from './hooks/useForm';

const App = () => {
  const name = useForm();
  const surname = useForm(false);
  const cep = useForm('cep');
  const email = useForm('email');

  function handleSubmit(event) {
    event.preventDefault();
    if (name.validate() && cep.validate() && email.validate()) {
      console.log('Enviou');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="name" type="text" {...name} />
      <Input label="Sobrenome" id="surname" type="text" {...surname} />
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input label="Email" id="email" type="email" {...email} />
      <button>Enviar</button>
    </form>
  );
};
export default App;
