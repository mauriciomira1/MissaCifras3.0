// Bibliotecas intaladas: zod @hookform/resolvers react-hook-form
"use client";
// Imagens
import Image from "next/image";
import SiteLogo from "../../../public/images/generic/logo.png";

// Ícones
import { FcGoogle } from "react-icons/fc";

// CSS
import styles from "./FormularioCadastro.module.css";

// Hooks do next
import Link from "next/link";

// Hooks de formulário
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Login com Google
import { signIn } from "next-auth/react";

// Validação de formulário com Zod
const createUserFormSchema = z
  .object({
    fullname: z
      .string()
      .nonempty("Você precisa inserir um nome.")
      // Transformando primeira letra do Nome e Sobrenome em maiúscula ao enviar dados
      .transform((name) => {
        return name
          .trim()
          .split(" ")
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1));
          })
          .join(" ");
      }),
    email: z
      .string()
      .nonempty("Você precisa inserir o seu e-mail.")
      .email("Formato de e-mail inválido")
      .toLowerCase(),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
    confirmPassword: z.string(),
  })
  // Verificando se o campo e senha e 'confirme a senha' são coincidentes
  .refine((val) => val.password === val.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

// Criando um typeof para evitar o erro em 'errors' dentro do return
type createUserFormData = z.infer<typeof createUserFormSchema>;

const FormularioCadastro = () => {
  // register (usado para validar os inputs); handleSubmit (usado para enviar o Form); formState (usado para emitir a mensagem do erro)
  const {
    register,
    handleSubmit,
    formState: { errors }, //desestruturando 'errors' para inseri-los na tela em um <span>
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  // Enviando dados (para o log por enquanto)
  const createUser = (data: any) => {
    console.log(data);
  };

  const handleLoginWithGoogle = () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000/cadastro/welcome",
    });
  };

  return (
    <form
      className="md:w-[26rem] sm:w-96 max-w-7xl rounded-xl bg-white py-8 px-10 flex flex-col justify-center items-center max-sm:px-2 w-10/12"
      onSubmit={handleSubmit(createUser)}
    >
      <Image src={SiteLogo} alt="Missa Cifras" width={160} />

      <h2 className="font-text font-bold text-xl mt-5 text-primaryColor">
        Bem-vindo
      </h2>

      <p className="font-text font-semibold text-xs text-gray-400 mb-5">
        Cadastre-se <strong>grátis</strong> e seja um evangelizador
      </p>

      <button
        className="duration-150 w-11/12 py-1.5 font-text text-sm font-semibold flex items-center justify-center gap-2 bg-white border rounded border-gray-300 hover:bg-gray-200 hover:border-gray-40000 active:bg-gray-300"
        onClick={handleLoginWithGoogle}
      >
        <span className="text-lg">
          <FcGoogle />
        </span>
        Cadastrar com Google
      </button>

      {/*       <div className="flex flex-col my-1.5 mt-4 w-full">
        <label
          htmlFor="fullname"
          className="font-text text-xs text-primaryColor font-bold"
        >
          Nome completo
        </label>
        <input
          id="fullname"
          type="text"
          className="text-sm border-gray-300 focus:outline-blue-600 px-1.5 contrast-more:border-primaryColor w-full h-8 bg-white border rounded hover:bg-gray-100 hover:border-gray-400 duration-150"
          {...register("fullname")}
        />
        {errors.fullname && (
          <span className={styles.errorMessage}>{errors.fullname.message}</span>
        )}
      </div>

      <div className="flex flex-col my-1.5 w-full">
        <label
          htmlFor="email"
          className="font-text text-xs text-primaryColor font-bold"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          className="text-sm border-gray-300 focus:outline-blue-600 px-1.5 contrast-more:border-primaryColor w-full h-8 bg-white border rounded hover:bg-gray-100 hover:border-gray-400 duration-150"
          {...register("email")}
        />
        {errors.email && (
          <span className={styles.errorMessage}>{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col my-1.5 w-full">
        <label
          htmlFor="password"
          className="font-text text-xs text-primaryColor font-bold"
        >
          Senha
        </label>
        <input
          id="password"
          type="password"
          autoComplete="on"
          className="text-sm border-gray-300 focus:outline-blue-600 px-1.5 contrast-more:border-primaryColor w-full h-8 bg-white border rounded hover:bg-gray-100 hover:border-gray-400 duration-150"
          {...register("password")}
        />
        {errors.password && (
          <span className={styles.errorMessage}>{errors.password.message}</span>
        )}
      </div>

      <div className="flex flex-col my-1.5 w-full">
        <label
          htmlFor="confirmPassword"
          className="font-text text-xs text-primaryColor font-bold"
        >
          Confirme a senha
        </label>
        <input
          id="confirmPassword"
          type="password"
          autoComplete="on"
          className="text-sm border-gray-300 focus:outline-blue-600 px-1.5 contrast-more:border-primaryColor w-full h-8 bg-white border rounded hover:bg-gray-100 hover:border-gray-400 duration-150"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className={styles.errorMessage}>
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <div className="flex items-start w-full my-2">
        <button
          type="submit"
          className="font-text text-xs font-semibold text-white bg-primaryColor rounded py-2 px-6 hover:bg-sky-900 duration-150 active:bg-sky-950"
        >
          Cadastrar
        </button>
      </div> */}
      <p className="font-text font-semibold text-sm mt-3 text-primaryColor cursor-default">
        Já tem cadastro?
        <Link
          href="/pages/login"
          className="text-secondaryColor font-bold hover:text-orange-800 ml-1"
        >
          Faça login
        </Link>
      </p>
    </form>
  );
};

export default FormularioCadastro;
