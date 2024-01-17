import Image from "next/image";
import React from "react";
import CapaCantor from "../../../public/images/artists/anjos-de-resgate.jpg";
import Link from "next/link";

// CSS
import styles from "./MenuLateral.module.css";

// Ícones
import { AiOutlinePlusCircle, AiOutlineDelete } from "react-icons/ai";
import PlaylistMenu from "@/components/PlaylistMenu/PlaylistMenu";

const MenuLateral = () => {
  const capaTitle = "Anjos de Resgate";

  return (
    <div className="flex flex-col gap-3 px-3 bg-gray-200 rounded items-center py-3">
      <div className="flex">
        <Image
          src={CapaCantor}
          alt={capaTitle}
          width={170}
          className="rounded-lg"
        />
      </div>

      <div
        className={`flex justify-center items-center bg-white shadow-md gap-6 w-44 h-10 font-bold rounded font-text text-sm ${styles.icons01}`}
      >
        <span className="hover:text-primaryColor">-</span>
        <p className="cursor-default text-primaryColor">Tom</p>
        <span className="hover:text-primaryColor">+</span>
      </div>

      <div
        className={`flex justify-center items-center bg-white shadow-md gap-6 w-44 h-10 font-bold rounded font-text text-sm ${styles.icons01}`}
      >
        <span className="hover:text-primaryColor">-</span>
        <p className="cursor-default text-primaryColor">Letra</p>
        <span className="hover:text-primaryColor">+</span>
      </div>

      <div className="px-3 flex justify-center items-center bg-white shadow-md gap-1 w-44 py-2 font-bold rounded cursor-pointer hover:bg-gray-400 hover:text-white duration-150">
        <span className="text-2xl">
          <AiOutlinePlusCircle />
        </span>
        <p className="text-xs flex text-center font-text">
          Adicionar à playlist
        </p>
      </div>

      <PlaylistMenu />

      <div className="flex justify-center font-cifra text-sm font-medium bg-secondaryColor text-white w-44 py-2 mb-10 rounded shadow-md hover:bg-red-500">
        <Link href="#">Salvar PDF</Link>
      </div>

      <div className="flex justify-center bg-white text-red-600 border-red-600 border-2 font-cifra text-sm font-medium w-44 py-2 rounded shadow-md hover:bg-red-600 hover:text-white">
        <Link href="#">Informar erro</Link>
      </div>
    </div>
  );
};

export default MenuLateral;
