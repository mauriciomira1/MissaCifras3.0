// Bibliotecas intaladas: zod @hookform/resolvers react-hook-form
"use client";

// SignIn para Login com Google
import { signIn } from "next-auth/react";

// Imagens
import Image from "next/image";
import SiteLogo from "../../../public/images/generic/logo.png";

// Ícones
import { FcGoogle } from "react-icons/fc";

// Hooks de formulário
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toast } from "@/components/shadcn/ui/toast";

// Validação de formulário com Zod
const createUserFormSchema = z
  .object({
    fullname: z.string().nonempty("Por favor, insira o seu nome."),
    email: z
      .string()
      .nonempty("Por favor, insira o seu e-mail.")
      .email("Formato de e-mail inválido"),
    password: z.string().min(6, "Insira uma senha válida."),
    confirmPassword: z.string(),
  })
  // Verificando se o campo e senha e 'confirme a senha' são coincidentes
  .refine((val) => val.password === val.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

// Criando um typeof para evitar o erro em 'errors' dentro do return
type createUserFormData = z.infer<typeof createUserFormSchema>;

const FormularioLogin = () => {
  // register (usado para validar os inputs); handleSubmit (usado para enviar o Form); formState (usado para emitir a mensagem do erro)
  const {
    register,
    handleSubmit,
    formState: { errors }, //desestruturei 'errors' para inseri-los na tela em um <span>
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  // Enviando dados (para o log por enquanto)
  const createUser = (data: any) => {
    console.log(data);
  };

  // Lidando com Login usando o Google
  const handleLoginWithGoogle = () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000/dashboard",
    });
  };

  return (
    <form
      className="md:w-[26rem] w-10/12 sm:w-96 max-w-md rounded-xl bg-white py-8 px-10 flex flex-col justify-center items-center"
      onSubmit={handleSubmit(createUser)}
    >
      <Image src={SiteLogo} alt="Missa Cifras" width={160} />

      <h2 className="font-text font-bold text-xl mt-5 text-primaryColor">
        Bem-vindo de volta!
      </h2>

      <p className="font-text font-semibold text-xs text-gray-400 mb-5 sm:mx-6 text-center">
        Venha e levar a nossa santa música a todos os cantos do nosso país.
      </p>

      <button
        className="duration-150 w-full py-2 font-text text-sm font-semibold flex items-center justify-center gap-2 bg-white border rounded border-gray-300 hover:bg-gray-200 hover:border-gray-40000 active:bg-gray-300"
        onClick={handleLoginWithGoogle}
      >
        <span className="text-lg">
          <FcGoogle />
        </span>
        Login com Google
      </button>

      {/*       <div className="flex flex-col my-1.5 w-full">
        <label className="font-text text-xs text-primaryColor font-bold">
          E-mail
        </label>
        <input
          type="email"
          className="text-sm border-gray-300 focus:outline-blue-600 px-1.5 contrast-more:border-primaryColor w-full h-8 bg-white border rounded hover:bg-gray-100 hover:border-gray-400 duration-150"
          {...register("email")}
        />
        {errors.email && (
          <span className={styles.errorMessage}>{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col my-1.5 w-full">
        <label className="font-text text-xs text-primaryColor font-bold">
          Senha
        </label>
        <input
          type="password"
          autoComplete="on"
          className="text-sm border-gray-300 focus:outline-blue-600 px-1.5 contrast-more:border-primaryColor w-full h-8 bg-white border rounded hover:bg-gray-100 hover:border-gray-400 duration-150"
          {...register("password")}
        />
        {errors.password && (
          <span className={styles.errorMessage}>{errors.password.message}</span>
        )}
      </div>

      <div className="flex items-start w-full my-2">
        <button
          type="submit"
          className="font-text text-xs font-semibold text-white bg-primaryColor rounded py-2 px-10 hover:bg-sky-900 duration-150 active:bg-sky-950"
        >
          Login
        </button>
      </div> */}

      {/*       <Link
        href="/pages/cadastro"
        className="text-secondaryColor font-semibold pt-3 hover:text-orange-800 ml-1"
      >
        Esqueceu a senha?
      </Link> */}
    </form>
  );
};

export default FormularioLogin;
