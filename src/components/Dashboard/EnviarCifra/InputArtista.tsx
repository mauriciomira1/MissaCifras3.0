"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { defaults } from "autoprefixer";

// Biblioteca React-select
import { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";

// Tipagem
import { SongDataProps } from "@/dtos/songDataProps";

// Janela de confirmação
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

// Funções
import ObterArtistas from "@/functions/dashboard/artista/obterArtistas";
import obterUmArtista from "@/functions/dashboard/artista/obterUmArtista";
import {
  HandleCreate,
  OpenConfirmWindow,
} from "@/functions/dashboard/artista/criarNovoArtista";

const animatedComponent = makeAnimated();

export type Option = {
  readonly label: string;
};

type Props = {
  setData: Dispatch<SetStateAction<SongDataProps>>;
};

type NewValueProps = {
  label: string;
};

// ----------------------------------------------------------------------------

const InputArtista = ({ setData }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<{ label: string }[]>();
  const [value, setValue] = useState<Option | string | unknown>();
  const [valorEmString, setValorEmString] = useState("");
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [newArtist, setNewArtist] = useState("");

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
    setIsLoading(true);

    ObterArtistas({ setOptions });

    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);

    try {
      const fetchArtista = async () => {
        const artista = await obterUmArtista(valorEmString);
        return (
          artista &&
          setData((prevData) => ({ ...prevData, artistaId: artista.id }))
        );
      };

      fetchArtista();
    } catch (error) {
      console.log("Adicionar artista no data falhou. (InputArtista.tsx)");
    }

    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valorEmString]);

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
                  setValorEmString,
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
        required
        isLoading={isLoading}
        hideSelectedOptions={true}
        onChange={(newValue: unknown) => {
          setValue(newValue);
          const valueString = newValue as NewValueProps;
          setValorEmString(valueString.label);
        }}
        options={options}
        components={animatedComponent}
        styles={colorStyles}
        // Passo esse valor para o setArtistaAtual do componente 'EnviarCifraComponent'
        formatCreateLabel={(inputValue) => `Criar novo: ${inputValue}`}
        onCreateOption={(inputValue) =>
          OpenConfirmWindow({
            setIsConfirmOpen,
            setNewArtist,
            value: inputValue,
          })
        }
        placeholder="Cantor/banda"
        value={value ? value : "Carregando..."}
      />
    </div>
  );
};

export default InputArtista;
