"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { defaults } from "autoprefixer";
import Select, { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";

// useContext
import { useNewMusic } from "@/contexts/useNewMusicContext";

// Tipagem
import { ClassificacaoOptions, SongDataProps } from "@/dtos/songDataProps";

const animatedComponent = makeAnimated();

type Props = {
  setData: Dispatch<SetStateAction<SongDataProps>>;
};

type ClassificacaoProps = SongDataProps["classificacao"];

export type ClassificacaoLabelValueProps = {
  label: ClassificacaoOptions;
  value: ClassificacaoOptions;
};

const options = [
  {
    value: "grupo-de-oracao/outros",
    label: "Grupo de Oração/Outros",
  },
  {
    value: "canto-de-entrada",
    label: "Canto de entrada",
  },
  {
    value: "ato-penitencial",
    label: "Ato Penitencial",
  },
  {
    value: "gloria",
    label: "Glória",
  },
  {
    value: "aclamacao",
    label: "Aclamação ao Evangelho",
  },
  {
    value: "ofertorio",
    label: "Ofertório",
  },
  {
    value: "santo",
    label: "Santo",
  },
  {
    value: "cordeiro",
    label: "Cordeiro",
  },
  {
    value: "comunhao",
    label: "Comunhão",
  },
  {
    value: "pos-comunhao",
    label: "Pós Comunhão",
  },
  {
    value: "final",
    label: "Final",
  },
];

// ----------------------------------------------------------------------------

const InputClassificacao = ({ setData }: Props) => {
  const {
    classificacaoLabelValue,
    setClassificacaoLabelValue,
    setClassificacaoEmString,
  } = useNewMusic();

  const [arrayDeClassificacao, setArrayDeClassificacao] =
    useState<ClassificacaoProps>();

  const colorStyles: StylesConfig = {
    control: (styles, { hasValue }) => ({
      ...styles,
      backgroundColor: hasValue ? "white" : "rgb(229 231 235)",
      border: hasValue ? defaults : 0,
      minHeight: 20,
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

  // Transformando em string para aparecer na Etapa03 (Revisão)
  const transformandoArrayEmString = (
    arrayDeClassificacao: ClassificacaoLabelValueProps[],
  ) => {
    const classificacaoEmString = arrayDeClassificacao
      .map((item) => item.label)
      .join(", ");
    setClassificacaoEmString(classificacaoEmString);
  };

  const handleChange = (value: unknown) => {
    transformandoArrayEmString(value as ClassificacaoLabelValueProps[]);
    setClassificacaoLabelValue(value as ClassificacaoLabelValueProps[]);

    const valueFormatted = value as ClassificacaoLabelValueProps[];

    const arrayDeClassificacao: ClassificacaoProps = valueFormatted.map(
      (value) => value.label,
    );

    setArrayDeClassificacao(arrayDeClassificacao);
  };

  useEffect(() => {
    const arrayDeClassificacao: ClassificacaoProps =
      classificacaoLabelValue.map((value) => value.label);

    setData((prevData) => ({
      ...prevData,
      classificacao: arrayDeClassificacao,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayDeClassificacao]);

  return (
    <div className="w-full">
      <Select
        options={options}
        isMulti
        isSearchable
        components={animatedComponent}
        onChange={handleChange}
        styles={colorStyles}
        value={classificacaoLabelValue}
        // defaultInputValue={classificacaoEmString}
        placeholder="Classificação..."
      />
    </div>
  );
};

export default InputClassificacao;
