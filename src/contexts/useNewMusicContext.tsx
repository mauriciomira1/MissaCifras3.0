"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Importação de tipos
import { SongDataProps } from "@/dtos/songDataProps";
import { SongProps } from "@/dtos/songProps";

type ContextNewMusicProps = {
  setSongData: Dispatch<SetStateAction<SongProps>>;
  songData: SongProps;

  setNomeDoArtista: Dispatch<SetStateAction<string | undefined>>;
  participantesLabelValue: { label: string; value: string }[];

  setParticipantesLabelValue: Dispatch<
    SetStateAction<{ label: string; value: string }[]>
  >;

  hashtagsEmString: string;
  setHashtagsEmString: Dispatch<SetStateAction<string>>;

  participantesEmString: string | undefined;
  setParticipantesEmString: Dispatch<SetStateAction<string | undefined>>;

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
  const [nomeDoArtista, setNomeDoArtista] = useState<string>();
  const [
    musicaCifradaComCaractereEspecial,
    setMusicaCifradaComCaractereEspecial,
  ] = useState<string>();
  const [participantesLabelValue, setParticipantesLabelValue] = useState<
    { label: string; value: string }[]
  >([]);
  const [hashtagsEmString, setHashtagsEmString] = useState("");
  const [participantesEmString, setParticipantesEmString] = useState<string>();

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
      chordsList: acordes,
      letra: letra,
    }));
  };

  useEffect(() => {
    console.log(songData);
  }, [songData]);

  return (
    <ContextNewMusic.Provider
      value={{
        songData,
        nomeDoArtista,
        setNomeDoArtista,
        participantesLabelValue,
        setParticipantesLabelValue,
        hashtagsEmString,
        setHashtagsEmString,
        participantesEmString,
        setParticipantesEmString,
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
