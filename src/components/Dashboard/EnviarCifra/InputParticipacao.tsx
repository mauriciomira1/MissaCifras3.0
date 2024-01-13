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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/shadcn/ui/alert-dialog";
import ObterArtistas from "@/functions/dashboard/artista/obterArtistas";
import {
  HandleCreate,
  OpenConfirmWindow,
} from "@/functions/dashboard/artista/criarNovoArtista";
import { unknown } from "zod";
import { useNewMusic } from "@/contexts/useNewMusicContext";

type Props = {
  setData: Dispatch<SetStateAction<SongDataProps>>;
  data: SongDataProps;
};

type NewValueProps = {
  label: string;
  value: string;
};

const animatedComponent = makeAnimated();

// ----------------------------------------------------------------------------

const InputParticipacao = ({ setData }: Props) => {
  const {
    participantesLabelValue,
    setParticipantesLabelValue,
    setParticipantesEmString,
  } = useNewMusic();

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<{ label: string }[]>();
  const [value, setValue] = useState<Option | unknown>();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [newArtist, setNewArtist] = useState("");
  const [arrayDeParticipantes, setArrayDeParticipantes] = useState<string[]>();

  const colorStyles: StylesConfig = {
    control: (styles, { hasValue, isFocused }) => ({
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

  const transformandoArrayDeParticipantesEmString = (
    arrayDeParticipantes: NewValueProps[],
  ) => {
    const participantesEmString = arrayDeParticipantes
      .map((item) => item.label)
      .join(", ");
    setParticipantesEmString(participantesEmString);
  };

  const handleChange = (value: unknown) => {
    setIsLoading(true);
    transformandoArrayDeParticipantesEmString(value as NewValueProps[]);

    setParticipantesLabelValue(value as NewValueProps[]);

    setValue(value);
    const valueFormatted = value as NewValueProps[];

    const arrayDeParticipantes = valueFormatted.map((value) => value.label);

    setArrayDeParticipantes(arrayDeParticipantes);

    setIsLoading(false);
  };

  // Obtendo lista atualizada de artistas no banco de dados
  useEffect(() => {
    setIsLoading(true);

    ObterArtistas({ setOptions });

    setIsLoading(false);
  }, []);

  // Enviando lista de participantes para o 'data' de nova música
  useEffect(() => {
    const arrayDeParticipantes = participantesLabelValue.map(
      (value) => value.label,
    );
    setData((prevData) => ({
      ...prevData,
      participacao: arrayDeParticipantes,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayDeParticipantes]);

  return (
    <div className="w-full">
      <AlertDialog open={isConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{newArtist}</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja criar um novo artista com esse nome?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setIsConfirmOpen(false);
              }}
            >
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                HandleCreate({
                  newArtist,
                  setIsConfirmOpen,
                  setOptions,
                  setValue,
                })
              }
            >
              Criar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <CreatableSelect
        isMulti
        isLoading={isLoading}
        hideSelectedOptions={true}
        closeMenuOnSelect={false}
        onChange={handleChange}
        components={animatedComponent}
        noOptionsMessage={() => "Nenhuma opção disponível"}
        styles={colorStyles}
        formatCreateLabel={(inputValue) => `Criar novo: ${inputValue}`}
        onCreateOption={(inputValue) =>
          OpenConfirmWindow({
            setIsConfirmOpen,
            setNewArtist,
            value: inputValue,
          })
        }
        placeholder="Cantores participantes"
        options={options}
        value={participantesLabelValue ? participantesLabelValue : unknown}
      />
    </div>
  );
};

export default InputParticipacao;
