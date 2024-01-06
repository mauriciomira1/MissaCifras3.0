import { SongDataProps } from "@/dtos/songDataProps";
import { defaults } from "autoprefixer";
import { Dispatch, SetStateAction } from "react";
import Select, { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";

// ----------------------------------------------------------------------------

const animatedComponent = makeAnimated();

type Props = {
  setData: Dispatch<SetStateAction<SongDataProps>>;
};

type ClassificacaoProps = SongDataProps["classificacao"];

type ValueProps = {
  label: string;
  value: string;
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

const InputClassificacao = ({ setData }: Props) => {
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

  const handleChange = (value: unknown) => {
    const classificacao = value as ValueProps;
    setData((prevData) => ({
      ...prevData,
      classificacao: classificacao.label as ClassificacaoProps,
    }));
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        isSearchable
        components={animatedComponent}
        onChange={handleChange}
        styles={colorStyles}
        placeholder="Classificação..."
      />
    </div>
  );
};

export default InputClassificacao;
