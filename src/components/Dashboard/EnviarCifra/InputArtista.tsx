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
import { SongDataProps } from "@/dtos/songDataProps";
import obterUmArtista from "@/app/(pages)/dashboard/enviar-cifra/actions/obterUmArtista";

const animatedComponent = makeAnimated();

export type Option = {
  readonly label: string;
};

type Props = {
  setData: Dispatch<SetStateAction<SongDataProps>>;
  data: SongDataProps;
};

const createOption = (label: string) => ({
  label,
  value: label,
});

type NewValueProps = {
  label: string;
};

// ----------------------------------------------------------------------------

const InputArtista = ({ setData, data }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<{ label: string }[]>();
  const [value, setValue] = useState<Option | string | unknown>();
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

  // Obtendo lista de artistas do banco de dados e adicionando na lista de opções do select
  const obtendoListaDeArtistas = async () => {
    try {
      const lista = await obterArtistas();
      const defaultOptions = lista.map((item) => createOption(item.nome));
      setOptions(defaultOptions);
    } catch (error) {
      console.log(
        "Erro no fetch obtendoListaDeArtistas de InputArtista ====>",
        error,
      );
    }
  };

  // Função que cria um novo artista pelo input, caso não exista no banco, e adicionando na lista de opções do select
  const handleCreate = (value: string) => {
    const criarArtista = async () => {
      await criarNovoArtista(value);
      obtendoListaDeArtistas();
    };
    criarArtista();
    setValue({ label: value });
    setValorEmString(value);
  };

  useEffect(() => {
    obtendoListaDeArtistas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const fetchArtista = async () => {
      const artista = await obterUmArtista(valorEmString);
      return (
        artista &&
        setData((prevData) => ({ ...prevData, artistaId: artista?.id }))
      );
    };

    fetchArtista();

    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valorEmString]);

  return (
    <div className="w-full">
      <CreatableSelect
        isLoading={isLoading}
        hideSelectedOptions={true}
        onChange={(newValue: unknown) => {
          const valueString = newValue as NewValueProps;
          setValue(newValue);
          valorEmString && setValorEmString(valueString.label);
        }}
        options={options}
        components={animatedComponent}
        styles={colorStyles}
        // Passo esse valor para o setArtistaAtual do componente 'EnviarCifraComponent'
        formatCreateLabel={(inputValue) => `Criar novo: ${inputValue}`}
        onCreateOption={handleCreate}
        placeholder="Cantor/banda"
        value={value ? value : "Carregando..."}
      />
    </div>
  );
};

export default InputArtista;
