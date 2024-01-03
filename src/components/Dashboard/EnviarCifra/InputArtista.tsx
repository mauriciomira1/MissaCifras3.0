"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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

type NewValueProps = {
  label: string;
};

// ----------------------------------------------------------------------------

const InputArtista = ({ setArtistaAtual }: InputArtistaProps) => {
  const [listaDeArtistas, setListaDeArtistas] = useState<
    ArtistaBancodeDadosProps[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<{ label: string }[]>();
  const [value, setValue] = useState<Option | unknown>();
  const [valorEmString, setValorEmString] = useState("");

  // Estilização
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

  useEffect(() => {
    const obtendoListaDeArtistas = async () => {
      try {
        const lista = await obterArtistas();
        /*         setListaDeArtistas(lista); */
        const defaultOptions = lista.map((item) => createOption(item.nome));
        setOptions(defaultOptions);
      } catch (error) {
        console.log(
          "Erro no fetch obtendoListaDeArtistas de InputArtista ====>",
          error,
        );
      }
    };
    obtendoListaDeArtistas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setArtistaAtual(valorEmString);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="w-full">
      <CreatableSelect
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={(newValue: unknown) => {
          const valueString = newValue as NewValueProps;
          setValue(newValue);
          setValorEmString(valueString.label);
        }}
        options={options}
        components={animatedComponent}
        styles={colorStyles}
        // Passo esse valor para o setArtistaAtual do componente 'EnviarCifraComponent'
        formatCreateLabel={(inputValue) => `Criar novo: ${inputValue}`}
        onCreateOption={(value: string) => {
          criarNovoArtista(value);
          setValue(value);
        }}
        placeholder="Adicione um cantor/banda"
        value={value}
      />
    </div>
  );
};

export default InputArtista;
