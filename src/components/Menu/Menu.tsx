"use client";

//NextJS
import Link from "next/link";
import Image from "next/image";

// Importando Ícones
import userIcon from "../../public/images/generic/user.svg";

// Importando imagens
import logo from "../../public/images/generic/logo.png";
import logoMobile from "../../public/images/generic/favicon.png";

// Componentes
import ItemMenu from "./ItemMenu";
import { useSession, signOut } from "next-auth/react";

// Ícones
import { FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import InputPesquisa from "../InputPesquisa/InputPesquisa";

const Menu = () => {
  const { data, status } = useSession();

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <div className="border-b-1 flex h-16 flex-wrap items-center justify-between px-3 shadow-md">
      {/* Logotipo min-width: 1024px */}
      <div className="hidden cursor-pointer hover:opacity-60 xl:block">
        <Link href="/">
          <Image src={logo} alt="Logotipo" width={150} />
        </Link>
      </div>

      {/* Logotipo mobile */}
      <div className="ml-12 cursor-pointer hover:opacity-60 xl:hidden">
        <Link href="/">
          <Image src={logoMobile} alt="Logotipo" width={40} />
        </Link>
      </div>

      {/* Barra de pesquisa */}
      <InputPesquisa />

      {/* Links de navegação no site */}
      <div className="hidden h-full items-center xl:flex">
        <ul className="flex h-full flex-wrap items-center text-xs font-semibold">
          <ItemMenu href="/" name="home" />
          <ItemMenu href="/colabore" name="colabore" />
          <ItemMenu href="/fale-conosco" name="fale conosco" />
          <ItemMenu href="/enviar-cifra" name="enviar cifra" />
          {status === "authenticated" ? (
            <>
              <li className="ml-1 rounded-full border-2 border-secondaryColor bg-secondaryColor font-bold hover:opacity-80 active:bg-secondaryColor active:opacity-70">
                <Link href="/dashboard" className="flex w-9">
                  {data.user ? (
                    <Image
                      src={data.user.image!}
                      width={0}
                      height={0}
                      alt="Foto do usuário"
                      sizes="100vw"
                      className="h-auto w-full rounded-full object-cover"
                    />
                  ) : (
                    <FiUser size={20} color="white" />
                  )}
                </Link>
              </li>
              <MdLogout
                onClick={handleLogout}
                size={22}
                className="ml-4 mr-2 cursor-pointer fill-gray-300 hover:fill-gray-700 active:fill-gray-400"
              />
            </>
          ) : (
            <>
              <ItemMenu href="/login" name="login" />

              <li className="ml-2 flex h-8 items-center justify-center rounded bg-secondaryColor px-2 pl-2 pr-3 font-text font-bold text-white hover:cursor-pointer hover:bg-red-600">
                <Link href="/cadastro" className="flex items-center">
                  <Image src={userIcon} alt="Usuário" />
                  CADASTRE-SE
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
