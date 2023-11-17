interface FormularioProps {
  src: string;
  text: string;
}

const FormularioBtn = ({ src, text }: FormularioProps) => {
  return <button>{text}</button>;
};

export default FormularioBtn;
