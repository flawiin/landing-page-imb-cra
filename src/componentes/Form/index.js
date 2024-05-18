import './Form.css'

import Input from '../../componentes/Input';


const Form = (props) => {
  return (
    <form className="container-form">
      <fieldset>
        <label htmlFor="nome-sobrenome"></label>
        <Input required placeholder="Nome"/>
        <Input required placeholder="E-mail"/>
        <input className="botao-enviar" type="submit" value="Enviar" name="Enviar Formulário" />
      </fieldset>
    </form>
  );
};

export default Form;
