import Image from "next/image";

// Importando componente
import FormularioCadastro from "./FormularioCadastro";

// Hooks
import Link from "next/link";

// Ícones
import { FaArrowLeft } from "react-icons/fa";

const Cadastro = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-start gap-6 bg-gradient-to-r from-[#1A3F78] to-[#EA9D9D] max-sm:pt-14 sm:justify-center md:flex-row md:px-6">
      <div className="flex flex-col items-center">
        <Link href="/">
          <div className="mb-4 flex items-center gap-2 font-text font-semibold text-white">
            <FaArrowLeft />
            Voltar para Home
          </div>
        </Link>
        <FormularioCadastro />
      </div>
      <div className="flex flex-col justify-start">
        <h1 className="mb-2 text-center font-highlight text-4xl font-bold text-primaryColor sm:text-4xl md:text-left">
          Cantar é próprio
          <br /> de quem ama.
        </h1>
        <cite className="text-xs italic text-white">Santo Agostinho</cite>
        <p className="mt-10 w-72 text-center font-text text-sm font-semibold text-white sm:mt-16 md:text-left">
          Cadastre-se e{" "}
          <span className="text-primaryColor">faça parte do nosso time </span>
          de evangelização através da música católica.
        </p>
      </div>
    </div>
  );
};
export default Cadastro;
