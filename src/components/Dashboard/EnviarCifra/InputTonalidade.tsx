"use client";

import { SongDataProps } from "@/dtos/songDataProps";
import { defaults } from "autoprefixer";
import { Dispatch, SetStateAction, useState } from "react";
import Select, { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponent = makeAnimated();

const options = [
  {
    value: "C",
    label: "C",
  },
  {
    value: "C#",
    label: "C#",
  },
  {
    value: "D",
    label: "D",
  },
  {
    value: "D#",
    label: "D#",
  },
  {
    value: "E",
    label: "E",
  },
  {
    value: "F",
    label: "F",
  },
  {
    value: "F#",
    label: "F#",
  },
  {
    value: "G",
    label: "G",
  },
  {
    value: "G#",
    label: "G#",
  },
  {
    value: "A",
    label: "A",
  },
  {
    value: "A#",
    label: "A#",
  },
  {
    value: "B",
    label: "B",
  },
];

type Props = {
  setData: Dispatch<SetStateAction<SongDataProps>>;
};

type TomProps = SongDataProps["tom"];

type ValueProps = {
  label: string;
  value: string;
};

const InputTonalidade = ({ setData }: Props) => {
  const [valor, setValor] = useState<unknown>();

  const handleChange = (value: unknown) => {
    setValor(value);
    const tonalidade = value as ValueProps;
    setData((prevData) => ({ ...prevData, tom: tonalidade.label as TomProps }));
  };

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
      <Select
        options={options}
        isSearchable
        onChange={handleChange}
        noOptionsMessage={() => "Carregando..."}
        components={animatedComponent}
        styles={colorStyles}
        placeholder="Tonalidade da música"
        value={valor}
      />
    </div>
  );
};

export default InputTonalidade;
