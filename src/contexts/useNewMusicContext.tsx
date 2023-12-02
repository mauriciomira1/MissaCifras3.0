"use client";
import { SongDataProps } from "@/types/songDataProps";
import { SongProps } from "@/types/songProps";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ContextNewMusicProps = {
  setSongData: Dispatch<SetStateAction<SongProps>>;
  songData: SongProps;
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
  {} as ContextNewMusicProps
);

export const NewMusicContextProvider = (props: { children: ReactNode }) => {
  const [songData, setSongData] = useState<SongProps>({} as SongProps);

  const EtapaSong01 = (data: SongDataProps) => {
    setSongData((prevState) => ({
      ...prevState,
      musica: data.musica,
      versao: data.versao,
      artistas: data.artistas,
      compositor: data.compositor,
      tom: data.tom,
      bpm: data.bpm,
      video: data.video,
      hashtags: data.hashtags,
      classificacao: data.classificacao,
      liturgica: data.liturgica,
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

  return (
    <ContextNewMusic.Provider
      value={{
        songData,
        setSongData,
        EtapaSong01,
        EtapaSong02,
      }}
    >
      {props.children}
    </ContextNewMusic.Provider>
  );
};

export const useNewMusic = () => useContext(ContextNewMusic);
