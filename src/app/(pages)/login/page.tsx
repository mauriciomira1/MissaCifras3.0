// Hooks do next
import Link from "next/link";

// Componente de formulário
import FormularioLogin from "./FormularioLogin";

// Ícones
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "Login | MissaCifras",
};

const Login = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-start gap-6 bg-gradient-to-r from-[#1A3F78] to-[#EA9D9D] sm:justify-center md:flex-row md:px-10">
      <div className="flex flex-col items-center justify-center md:items-end">
        <h1 className="mb-2 max-w-xl text-center font-highlight text-3xl font-bold text-tertiaryColor max-sm:mx-4 max-sm:mt-12 max-sm:px-6 md:text-right lg:text-5xl">
          Nada do que é feito por amor é pequeno.
        </h1>
        <cite className="text-xs italic text-white">
          Santa Terezinha do Menino Jesus
        </cite>
        <p className="max-sm: mt-6 w-72 py-6 text-center font-text text-sm font-semibold text-white md:text-right">
          Faça login na nossa plataforma e venha evangelizar através da música.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Link href="/">
          <div className="mb-4 flex items-center gap-2 font-text font-semibold text-white">
            <FaArrowLeft />
            Voltar para Home
          </div>
        </Link>
        <FormularioLogin />
      </div>
    </div>
  );
};
export default Login;
