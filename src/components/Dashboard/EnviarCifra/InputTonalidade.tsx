import { defaults } from "autoprefixer";
import Select, { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponent = makeAnimated();

const options = [
  {
    value: "c",
    label: "C",
  },
  {
    value: "c#",
    label: "C#",
  },
  {
    value: "d",
    label: "D",
  },
  {
    value: "d#",
    label: "D#",
  },
  {
    value: "e",
    label: "E",
  },
  {
    value: "f",
    label: "F",
  },
  {
    value: "f#",
    label: "F#",
  },
  {
    value: "g",
    label: "G",
  },
  {
    value: "g#",
    label: "G#",
  },
  {
    value: "a",
    label: "A",
  },
  {
    value: "a#",
    label: "A#",
  },
  {
    value: "b",
    label: "B",
  },
];

const InputTonalidade = () => {
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
        components={animatedComponent}
        styles={colorStyles}
        placeholder="Tonalidade da música"
      />
    </div>
  );
};

export default InputTonalidade;
