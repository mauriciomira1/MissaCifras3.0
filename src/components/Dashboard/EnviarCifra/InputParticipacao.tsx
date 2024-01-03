"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

// Biblioteca React select
import { defaults } from "autoprefixer";
import { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";

// Tipagem
import { SongDataProps } from "@/dtos/songDataProps";
import { Option } from "./InputArtista";
import criarNovoArtista from "@/app/(pages)/dashboard/enviar-cifra/actions/criarNovoArtista";
import obterArtistas from "@/app/(pages)/dashboard/enviar-cifra/actions/obterArtistas";

const animatedComponent = makeAnimated();

type Props = {
  setData: Dispatch<SetStateAction<SongDataProps>>;
  data: SongDataProps;
};

const createOption = (label: string) => ({
  label,
});

type NewValueProps = {
  label: string;
};

// ----------------------------------------------------------------------------

const InputParticipacao = ({ setData, data }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<{ label: string }[]>();
  const [value, setValue] = useState<Option | unknown>();
  const [valorEmString, setValorEmString] = useState("");

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

  useEffect(() => {
    setIsLoading(true);

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
    obtendoListaDeArtistas();

    setIsLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setData((prevData) => ({ ...prevData, valorEmString }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valorEmString]);

  return (
    <div className="w-full">
      <CreatableSelect
        isMulti
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
        placeholder="Adicione cantores participantes"
        value={value ? value : "Carregando..."}
      />
    </div>
  );
};

export default InputParticipacao;
