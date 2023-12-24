"use client";

//NextJS
import Link from "next/link";
import Image from "next/image";

// Hooks do React
import { useState } from "react";

// Importando Ícones
import searchIcon from "../../public/images/generic/search-icon.svg";
import userIcon from "../../public/images/generic/user.svg";

// Importando imagens
import logo from "../../public/images/generic/logo.png";
import logoMobile from "../../public/images/generic/favicon.png";

// Componentes
import ItemMenu from "./ItemMenu";
import { useSession, signOut } from "next-auth/react";

// Ícones
import { FiUser } from "react-icons/fi";

interface MenuProps {
  pageSrc: string;
}

const Menu = () => {
  const { data, status } = useSession();
  const [search, setSearch] = useState("");

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
      <div className="w-52 sm:w-64 lg:w-96">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Image src={searchIcon} alt="Pesquisar" width={20} />
          </span>
          <input
            className="block w-full rounded-full border border-slate-300 bg-white py-1.5 pl-9 pr-3 shadow-sm placeholder:font-normal placeholder:text-gray-400 hover:bg-gray-50 focus:border-gray-400 focus:outline-none sm:text-sm"
            placeholder="Vamos louvar?"
            type="text"
            name="search"
            autoComplete="off"
            onChange={(ev) => setSearch(ev.target.value)}
          />
        </label>
      </div>

      {/* Links de navegação no site */}
      <div className="hidden h-full items-center xl:flex">
        <ul className="flex h-full flex-wrap items-center text-xs font-semibold">
          <ItemMenu href="/" name="home" />
          <ItemMenu href="/colabore" name="colabore" />
          <ItemMenu href="/fale-conosco" name="fale conosco" />
          <ItemMenu href="/enviar-cifra" name="enviar cifra" />
          {status === "authenticated" ? (
            <>
              <ItemMenu href="/" name="logout" onClickFunction={handleLogout} />

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
