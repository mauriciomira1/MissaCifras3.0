"use client";
import { useState } from "react";

import { ArtistaBancodeDadosProps } from "@/dtos/artistaProps";

import GetObterArtistas from "../dashboard/artista/getObterArtistas";

const ObtendoTodosOsArtistas = () => {
  // Buscando todos os artistas no banco de dados
  const [listaDeArtistas, setListaDeArtistasProps] = useState<
    ArtistaBancodeDadosProps[]
  >([]);

  const listandoArtistas = async () => {
    const lista = await GetObterArtistas();
    setListaDeArtistasProps(lista);
  };

  listandoArtistas();
};

export default ObtendoTodosOsArtistas;
