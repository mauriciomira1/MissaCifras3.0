import { ElementType } from "react";

interface FormularioInputProps {
  label?: string;
  placeholder?: string;
  typeInput?: string | "text";
  icon?: ElementType;
  onSubmitAction?: () => void;
}

const FormularioInput = ({
  label,
  placeholder,
  typeInput,
  icon: Icon,
  onSubmitAction,
}: FormularioInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={typeInput}
        placeholder={placeholder}
        onSubmit={onSubmitAction}
      />
    </div>
  );
};

export default FormularioInput;
