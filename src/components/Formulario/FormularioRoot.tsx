import { ReactNode } from "react";

interface FormularioRootProps {
  children: ReactNode;
}

const FormularioRoot = ({ children }: FormularioRootProps) => {
  return (
    <div className="px-4 py-4 bg-white flex flex-col items-center justify-center gap-3">
      {children}
    </div>
  );
};

export default FormularioRoot;
