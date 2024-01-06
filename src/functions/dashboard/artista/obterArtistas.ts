"use client";

import { Dispatch, SetStateAction } from "react";
import GetObterArtistas from "./getObterArtistas";

type Props = {
  setOptions: Dispatch<
    SetStateAction<
      | {
          label: string;
        }[]
      | undefined
    >
  >;
};

const createOption = (label: string) => ({
  label,
  value: label,
});

const ObterArtistas = ({ setOptions }: Props) => {
  const fetch = async () => {
    try {
      const lista = await GetObterArtistas();
      const defaultOptions = lista.map((item) => createOption(item.nome));
      setOptions(defaultOptions);
    } catch (error) {
      console.log(
        "Erro no fetch obtendoListaDeArtistas de InputArtista ====>",
        error,
      );
    }
  };

  fetch();
};

export default ObterArtistas;
