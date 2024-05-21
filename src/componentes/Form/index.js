import './Form.css'

import Input from '../../componentes/Input';
import Button from '../Button';


const Form = (props) => {
  return (
    <form className="container-form">
      <fieldset>
        <label htmlFor="nome-sobrenome"></label>
        <Input required placeholder="Nome"/>
        <Input required placeholder="E-mail"/>
        <Button texto="Enviar"/>
      </fieldset>
    </form>
  );
};

export default Form;
