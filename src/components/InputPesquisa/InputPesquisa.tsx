"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Animação de janela de pesquisa
import { StylesConfig } from "react-select";

import Select from "react-select";

// Ícone de pesquisa
import searchIcon from "../../public/images/generic/search-icon.svg";

// Funções auxiliares
import ObterTodasAsMusicasContenha from "@/functions/pesquisa/ObterTodasAsMusicasContenha";
import {
  ObterArtistaProvider,
  useObterArtista,
} from "@/contexts/useObterArtistaContext";

type OptionsProps = {
  label: string; // Nome da música
  value: string; // Nome do música
};

// ----------------------------------------------------------------

const InputPesquisa = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<OptionsProps[]>([]);
  const [textoDePesquisa, setTextoDePesquisa] = useState<string>();

  // Função que retorna todas as músicas do banco que possuam a letra pesquisada
  const obterMusicasQueContenham = async (textoDePesquisa: string) => {
    if (textoDePesquisa) {
      try {
        setOptions([]);
        const musicas = await ObterTodasAsMusicasContenha({
          textoDePesquisa,
        });

        // musicas && setListaDeMusicas(musicas as unknown as SongProps[]);
        musicas &&
          musicas.map((musica) => {
            const musicaLabelValue = {
              label: musica.musica,
              value: musica.artistaId!,
            };

            setOptions((prevValue) => [...prevValue, musicaLabelValue]);
          });
      } catch (error) {
        console.log("Erro no InputPesquisa =======>", error);
      }
    }
  };

  const colorStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      borderColor: "rgb(203 213 225)",
      borderRadius: "5rem",
      paddingLeft: ".3rem",
    }),
    noOptionsMessage: (styles) => {
      return {
        ...styles,
        fontSize: 12,
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        display: textoDePesquisa ? "block" : "none",
      };
    },
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        fontSize: 10,
        backgroundColor: isDisabled
          ? undefined
          : isFocused
          ? "#eceaeb"
          : undefined,
        color: isDisabled
          ? "#cccccc"
          : isSelected
          ? "black"
            ? "black"
            : "black"
          : "black",
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? "#10"
              : "#12"
            : undefined,
        },
      };
    },
    placeholder: (styles) => {
      return {
        ...styles,
        color: "#9e9cab",
        fontSize: "0.88rem",
      };
    },
  };

  return (
    <ObterArtistaProvider>
      <div className="w-52 sm:w-64 lg:w-96">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
            <Image src={searchIcon} alt="Pesquisar" width={20} />
          </span>

          <Select
            isSearchable
            isLoading={isLoading}
            placeholder="Vamos louvar?"
            noOptionsMessage={() => "Pesquise por uma música..."}
            styles={colorStyles}
            value={textoDePesquisa}
            onInputChange={(newValue: unknown) => {
              setTextoDePesquisa(newValue as string);
              obterMusicasQueContenham(newValue as string);
            }}
            options={options}
          />
        </label>
      </div>
    </ObterArtistaProvider>
  );
};

export default InputPesquisa;
