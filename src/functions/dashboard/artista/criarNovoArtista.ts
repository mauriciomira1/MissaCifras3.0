"use client";
import { Dispatch, SetStateAction, useState } from "react";
import postNovoArtista from "./postNovoArtista";
import ObterArtistas from "./obterArtistas";

type HandleCreateProps = {
  setValue: Dispatch<unknown>;
  setValorEmString?: Dispatch<SetStateAction<string>>;
  setIsConfirmOpen: (value: SetStateAction<boolean>) => void;
  setOptions: Dispatch<
    SetStateAction<
      | {
          label: string;
        }[]
      | undefined
    >
  >;
  newArtist: string;
};

type OpenConfirmWindowProps = {
  setNewArtist: Dispatch<SetStateAction<string>>;
  setIsConfirmOpen: Dispatch<SetStateAction<boolean>>;
  value: string;
};

// Abrir janela de confirmação para criação de novo artista
export const OpenConfirmWindow = ({
  setIsConfirmOpen,
  setNewArtist,
  value,
}: OpenConfirmWindowProps) => {
  let valorFormatado = value.replace(/[^a-zA-ZÀ-ú\s]/g, "");
  valorFormatado = (" " + valorFormatado)
    .toLowerCase()
    .replace(/\s[a-zA-Z0-9À-ú]/g, (letter) => {
      return letter.toUpperCase();
    });

  setNewArtist(valorFormatado);
  setIsConfirmOpen(true);
};

// Criar novo artista no banco de dados
export const HandleCreate = ({
  setIsConfirmOpen,
  setOptions,
  setValue,
  setValorEmString,
  newArtist,
}: HandleCreateProps) => {
  setIsConfirmOpen(false);

  const criarArtista = async () => {
    await postNovoArtista(newArtist);
    ObterArtistas({ setOptions });
  };

  try {
    criarArtista();
  } catch (error) {
    throw new Error("Não foi possível criar um novo artista. Tente mais tarde");
  }

  setValue({ label: newArtist });
  setValorEmString && setValorEmString(newArtist);
};
