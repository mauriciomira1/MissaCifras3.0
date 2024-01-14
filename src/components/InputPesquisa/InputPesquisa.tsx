"use client";
import { useState } from "react";
import Image from "next/image";

// Animação de janela de pesquisa
import makeAnimated from "react-select/animated";
import { StylesConfig } from "react-select";
import { defaults } from "autoprefixer";

import Select from "react-select";

// Ícone de pesquisa
import searchIcon from "../../public/images/generic/search-icon.svg";

// Tipagem
import { SongProps } from "@/dtos/songProps";

// Funções auxiliares
import ObterTodasAsMusicasQueIniciamCom from "@/functions/pesquisa/ObterTodasAsMusicasQueIniciamCom";

const animatedComponent = makeAnimated();

type NewValueProps = {
  label: string;
};

// ----------------------------------------------------------------

const InputPesquisa = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [listaDeMusicas, setListaDeMusicas] = useState<SongProps[]>([]);
  const [options, setOptions] = useState<{ label: string }[]>();
  const [textoDePesquisa, setTextoDePesquisa] = useState<string>("");

  // Função que retorna todas as músicas do banco que iniciam com a letra pesquisada
  const obterMusicasQueIniciamComALetra = async (textoDePesquisa: string) => {
    try {
      const primeiraLetra = textoDePesquisa[0];
      const musicas = await ObterTodasAsMusicasQueIniciamCom({ primeiraLetra });
      console.log(musicas);

      musicas && setListaDeMusicas(musicas as unknown as SongProps[]);
    } catch (error) {
      console.log("Erro no InputPesquisa =======>", error);
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
    <div className="w-52 sm:w-64 lg:w-96">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
          <Image src={searchIcon} alt="Pesquisar" width={20} />
        </span>
        {/* <input
            className="block w-full rounded-full border border-slate-300 bg-white py-1.5 pl-9 pr-3 shadow-sm placeholder:font-normal placeholder:text-gray-400 hover:bg-gray-50 focus:border-gray-400 focus:outline-none sm:text-sm"
            placeholder="Vamos louvar?"
            type="text"
            name="search"
            autoComplete="off"
            onChange={(ev) => ev.target.value}
          /> */}
        <Select
          isLoading={isLoading}
          placeholder="Vamos louvar?"
          noOptionsMessage={() => "Procure por uma música..."}
          components={animatedComponent}
          styles={colorStyles}
          value={textoDePesquisa}
          /*           onChange={(newValue: unknown) => {
            setValue(newValue);
            const valueString = newValue as NewValueProps;
            setNomeDoArtista(valueString.label);
            setValorEmString(valueString.label);
          }} */
          onChange={(newValue: unknown) => {
            const valorComLabeleValue = newValue as NewValueProps;

            setTextoDePesquisa(valorComLabeleValue.label);
            obterMusicasQueIniciamComALetra(valorComLabeleValue.label);
          }}
          options={listaDeMusicas}
        />
      </label>
    </div>
  );
};

export default InputPesquisa;
