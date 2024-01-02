"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type ContextProps = {
  criarNovoArtista?: (artista: string) => void;
  listaDeArtistas?: [];
  atualizarListaDeArtistas?: () => void;
  setNovoArtista?: Dispatch<SetStateAction<string>>;
  novoArtista?: string;
};

export const EnviarCifraContext = createContext<ContextProps>({
  criarNovoArtista: () => {},
  listaDeArtistas: [],
  atualizarListaDeArtistas: () => {},
  setNovoArtista: () => {},
  novoArtista: "",
});

const EnviarCifraProvider = ({ children }: { children: ReactNode }) => {
  const [novoArtista, setNovoArtista] = useState("");
  return (
    <EnviarCifraContext.Provider
      value={{
        /*         atualizarListaDeArtistas,
        criarNovoArtista,
        listaDeArtistas, */
        setNovoArtista,
        novoArtista,
      }}
    ></EnviarCifraContext.Provider>
  );
};
