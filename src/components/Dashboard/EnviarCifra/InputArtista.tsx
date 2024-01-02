"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { defaults } from "autoprefixer";

// Props
import { ArtistaBancodeDadosProps } from "@/dtos/artistaProps";

// Biblioteca React-select
import { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";

// Funções
import criarNovoArtista from "@/app/(pages)/dashboard/enviar-cifra/actions/criarNovoArtista";
import obterArtistas from "@/app/(pages)/dashboard/enviar-cifra/actions/obterArtistas";

const animatedComponent = makeAnimated();

export type Option = {
  readonly label: string;
};

type InputArtistaProps = {
  setArtistaAtual: Dispatch<SetStateAction<string>>;
};

const createOption = (label: string) => ({
  label,
});

// ----------------------------------------------------------------------------

const InputArtista = ({ setArtistaAtual }: InputArtistaProps) => {
  const [listaDeArtistas, setListaDeArtistas] = useState<
    ArtistaBancodeDadosProps[]
  >([]);

  const obtendoListaDeArtistas = async () => {
    const lista = await obterArtistas();
    setListaDeArtistas(lista);
  };

  obtendoListaDeArtistas();

  const defaultOptions = listaDeArtistas.map((item) => createOption(item.nome));

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState<Option | null>();

  const colorStyles: StylesConfig = {
    control: (styles, { hasValue }) => ({
      ...styles,
      backgroundColor: hasValue ? "white" : "rgb(229 231 235)",
      border: hasValue ? defaults : 0,
      height: 20,
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        fontSize: 14,
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
    <div className="w-full">
      <CreatableSelect
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={(newValue: unknown) => {
          if (
            newValue === null ||
            newValue === undefined ||
            (typeof newValue === "object" &&
              "label" in newValue &&
              "value" in newValue)
          ) {
            setValue(newValue as Option | null);
          }
        }}
        options={options}
        components={animatedComponent}
        styles={colorStyles}
        // Passo esse valor para o setArtistaAtual do componente 'EnviarCifraComponent'
        formatCreateLabel={(inputValue) => `Criar novo: ${inputValue}`}
        onCreateOption={(value: string) => {
          criarNovoArtista(value);
          setArtistaAtual(value);
        }}
        placeholder="Adicione um cantor/banda"
        value={value}
      />
    </div>
  );
};

export default InputArtista;
