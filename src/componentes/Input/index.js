import "./Input.css";

const Input = (props) => {
  return (
    <input className="input-um" type="text" id="nome-sobrenome" required placeholder={props.placeholder} />
  );
};

export default Input;
