"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// Importação de tipos
import { SongDataProps } from "@/dtos/songDataProps";
import { SongProps } from "@/dtos/songProps";

// Importação de componentes
import { ClassificacaoLabelValueProps } from "@/components/Dashboard/EnviarCifra/InputClassificacao";

type ContextNewMusicProps = {
  setSongData: Dispatch<SetStateAction<SongProps>>;
  songData: SongProps;

  setNomeDoArtista: Dispatch<SetStateAction<string | undefined>>;

  hashtagsEmString: string;
  setHashtagsEmString: Dispatch<SetStateAction<string>>;

  participantesEmString: string | undefined;
  participantesLabelValue: { label: string; value: string }[];
  setParticipantesEmString: Dispatch<SetStateAction<string | undefined>>;
  setParticipantesLabelValue: Dispatch<
    SetStateAction<{ label: string; value: string }[]>
  >;

  classificacaoEmString: string | undefined;
  classificacaoLabelValue: ClassificacaoLabelValueProps[];
  setClassificacaoEmString: Dispatch<SetStateAction<string | undefined>>;
  setClassificacaoLabelValue: Dispatch<
    SetStateAction<ClassificacaoLabelValueProps[]>
  >;

  nomeDoArtista: string | undefined;

  musicaCifradaComCaractereEspecial: string | undefined;
  setMusicaCifradaComCaractereEspecial: Dispatch<
    SetStateAction<string | undefined>
  >;

  EtapaSong01: (data: SongDataProps) => void;
  EtapaSong02: ({
    cifraDaMusica,
    letra,
    acordes,
  }: {
    cifraDaMusica: string;
    acordes: string[];
    letra: string;
  }) => void;
};

const ContextNewMusic = createContext<ContextNewMusicProps>(
  {} as ContextNewMusicProps,
);

export const NewMusicContextProvider = (props: { children: ReactNode }) => {
  const [songData, setSongData] = useState<SongProps>({} as SongProps);

  console.log("rodou o context");

  // Cantor/Banda
  const [nomeDoArtista, setNomeDoArtista] = useState<string>();
  const [
    musicaCifradaComCaractereEspecial,
    setMusicaCifradaComCaractereEspecial,
  ] = useState<string>();

  // Participação especial
  const [participantesLabelValue, setParticipantesLabelValue] = useState<
    { label: string; value: string }[]
  >([]);
  const [participantesEmString, setParticipantesEmString] = useState<string>();

  const [classificacaoLabelValue, setClassificacaoLabelValue] = useState<
    ClassificacaoLabelValueProps[]
  >([]);
  const [classificacaoEmString, setClassificacaoEmString] = useState<string>();

  // Hashtags
  const [hashtagsEmString, setHashtagsEmString] = useState("");

  const EtapaSong01 = (data: SongDataProps) => {
    setSongData((prevState) => ({
      ...prevState,
      artistaId: data.artistaId,
      musica: data.musica,
      slug: data.slug,
      versao: data.versao,
      participacao: data.participacao,
      compositor: data.compositor,
      tom: data.tom,
      bpm: data.bpm,
      video: data.video,
      hashtags: data.hashtags,
      classificacao: data.classificacao,
      liturgica: data.liturgica || false,
    }));
  };

  const EtapaSong02 = ({
    cifraDaMusica,
    acordes,
    letra,
  }: {
    cifraDaMusica: string;
    acordes: string[];
    letra: string;
  }) => {
    setSongData((prevState) => ({
      ...prevState,
      cifra: cifraDaMusica,
      acordes,
      letra: letra,
    }));
  };

  console.log(songData);

  return (
    <ContextNewMusic.Provider
      value={{
        songData,
        nomeDoArtista,
        setNomeDoArtista,

        hashtagsEmString,
        setHashtagsEmString,

        participantesEmString,
        participantesLabelValue,
        setParticipantesEmString,
        setParticipantesLabelValue,

        classificacaoLabelValue,
        classificacaoEmString,
        setClassificacaoLabelValue,
        setClassificacaoEmString,

        setSongData,
        EtapaSong01,
        EtapaSong02,
        musicaCifradaComCaractereEspecial,
        setMusicaCifradaComCaractereEspecial,
      }}
    >
      {props.children}
    </ContextNewMusic.Provider>
  );
};

export const useNewMusic = () => useContext(ContextNewMusic);
