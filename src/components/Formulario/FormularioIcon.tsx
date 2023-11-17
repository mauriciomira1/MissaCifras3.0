import { ElementType } from "react";

interface FormularioProps {
  icon?: ElementType;
}

const FormularioIcon = ({ icon: Icon }: FormularioProps) => {
  return (
    <div>
      <p>ícone</p>
    </div>
  );
};

export default FormularioIcon;
