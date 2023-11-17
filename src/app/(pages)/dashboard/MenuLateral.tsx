"use client";
import { MouseEventHandler } from "react";
import ItemMenuLateral from "./ItemMenuLateral";
import { BiEdit, BiSolidPlaylist } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

const MenuLateral = () => {
  return (
    <nav>
      {/*       <ItemMenuLateral href="#" icon={BiUser} name="Meus dados" /> */}
      <ItemMenuLateral
        href="/dashboard/playlists"
        icon={BiSolidPlaylist}
        name="Playlists"
      />
      <ItemMenuLateral
        href="/dashboard/minhas-colaboracoes"
        icon={FiSend}
        name="Cifras enviadas"
      />
      <ItemMenuLateral
        href="/dashboard/enviar-cifra"
        icon={BiEdit}
        name="Enviar Cifra"
      />
    </nav>
  );
};

export default MenuLateral;
