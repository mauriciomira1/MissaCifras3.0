"use client";

// NextJS
import Image from "next/image";
import Link from "next/link";

// Components
import ItemMenuMobile from "./ItemMenuMobile";

// Icons
import userIcon from "../../public/images/generic/user.svg";

//Hooks
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const MenuMobile = () => {
  const [toogleClass, setToogleClass] = useState(true);

  // Função para ocultar menu sanduiche
  const toogleMenu = () => {
    {
      toogleClass ? setToogleClass(false) : setToogleClass(true);
    }
  };

  return (
    <div className="absolute h-full">
      {/* Ícone sanduiche */}
      <div
        className="text-gray-400 absolute justify-end ml-3 mt-5 xl:hidden cursor-pointer"
        onClick={toogleMenu}
      >
        <FiMenu className="text-2xl" />
      </div>

      <div
        className={`lg:hidden z-10 ${
          toogleClass ? "-left-72" : "left-0"
        } duration-300 h-full absolute flex flex-col w-72 bg-primaryColor shadow-lg shadow-black`}
      >
        {/* Menu sanduiche */}
        <div className="text-white font-text font-bold flex justify-end my-3 mr-4">
          <span
            className="active:text-tertiaryColor cursor-pointer"
            onClick={toogleMenu}
          >
            X
          </span>
        </div>

        <ul
          className="flex flex-col items-center font-semibold gap-5 w-full"
          onClick={toogleMenu}
        >
          <ItemMenuMobile href="/" name="Home" />
          <ItemMenuMobile href="/acordes" name="Acordes" />
          <ItemMenuMobile href="/colabore" name="Colabore" />
          <ItemMenuMobile href="/fale-conosco" name="Fale conosco" />
          <ItemMenuMobile href="/enviar-cifra" name="Enviar cifra" />
          <ItemMenuMobile href="/login" name="Login" />

          <li className="font-text text-white  active:text-tertiaryColor bg-secondaryColor rounded px-3 py-1">
            <Link href="/cadastro" className="flex items-center">
              <Image src={userIcon} alt="Usuário" />
              CADASTRE-SE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
