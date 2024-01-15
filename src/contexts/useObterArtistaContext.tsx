"use client";

import { ArtistaBancodeDadosProps } from "@/dtos/artistaProps";
import GetObterArtistas from "@/functions/dashboard/artista/getObterArtistas";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ObterArtistaContextProps = {
  listaDeArtistas: ArtistaBancodeDadosProps[];
};

const ContextObterArtista = createContext<ObterArtistaContextProps>(
  {} as ObterArtistaContextProps,
);

export const ObterArtistaProvider = (props: { children: ReactNode }) => {
  const [listaDeArtistas, setListaDeArtistas] = useState<
    ArtistaBancodeDadosProps[]
  >([]);

  // Função para obter todos os artistas do banco de dados
  const listandoArtistas = async () => {
    const lista = await GetObterArtistas();
    setListaDeArtistas(lista);
  };

  useEffect(() => {
    listandoArtistas();
  }, []);

  return (
    <ContextObterArtista.Provider value={{ listaDeArtistas }}>
      {props.children}
    </ContextObterArtista.Provider>
  );
};

export const useObterArtista = () => useContext(ContextObterArtista);
