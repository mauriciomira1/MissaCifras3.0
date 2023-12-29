"use client";
import { ArtistaBancodeDadosProps } from "@/dtos/artistaProps";
import { defaults } from "autoprefixer";
import { Dispatch, SetStateAction, useState } from "react";
import Select, { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";

const animatedComponent = makeAnimated();

export type Option = {
  readonly label: string;
};

type InputArtistaProps = {
  listaDeArtistas: ArtistaBancodeDadosProps[];
  setArtistaAtual: Dispatch<SetStateAction<string>>;
};

const createOption = (label: string) => ({
  label,
});

// ----------------------------------------------------------------------------

const InputArtista = ({
  listaDeArtistas,
  setArtistaAtual,
}: InputArtistaProps) => {
  const defaultOptions = listaDeArtistas.map((item) => createOption(item.nome));

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState<Option | null>();

  /*   const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      setValue(newOption);
    }, 1000);
  }; */

  const colorStyles: StylesConfig = {
    control: (styles, { hasValue, isFocused }) => ({
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
        onCreateOption={(value) => value && setArtistaAtual(value)}
        placeholder="Selecione um cantor/banda"
        value={value}
      />
    </div>
  );
};

export default InputArtista;
