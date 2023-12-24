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
      callbackUrl: "/dashboard",
    });
  };

  return (
    <form
      className="flex w-11/12 max-w-7xl flex-col items-center justify-center rounded-xl bg-white px-10 py-8 max-sm:px-8 md:w-[26rem]"
      onSubmit={handleSubmit(createUser)}
    >
      <Image src={SiteLogo} alt="Missa Cifras" width={160} />

      <h2 className="mt-5 font-text text-xl font-bold text-primaryColor">
        Bem-vindo
      </h2>

      <p className="mb-5 font-text text-xs font-semibold text-gray-400">
        Cadastre-se <strong>grátis</strong> e seja um evangelizador
      </p>

      <button
        className="hover:border-gray-40000 flex w-11/12 items-center justify-center gap-2 rounded border border-gray-300 bg-white px-2 py-1.5 font-text text-sm font-semibold duration-150 hover:bg-gray-200 active:bg-gray-300"
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
      <p className="mt-3 cursor-default font-text text-sm font-semibold text-primaryColor">
        Já tem cadastro?
        <Link
          href="/pages/login"
          className="ml-1 font-bold text-secondaryColor hover:text-orange-800"
        >
          Faça login
        </Link>
      </p>
    </form>
  );
};

export default FormularioCadastro;
