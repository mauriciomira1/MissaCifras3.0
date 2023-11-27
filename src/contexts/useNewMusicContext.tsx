"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface SongDataProps {
  id?: number;
  musica: string;
  slug?: string;
  versao?: string;
  compositor?: string;
  tom: string;
  bpm?: number;
  video: string;
  letra?: string;
  cifra?: string;
  chordsList?: string[];
  artistas: string[];
  hashtags: string;
  classificacao: string;
  liturgica: boolean;
  qtdDeCliques?: number;
  userWhoSent?: string;
}

interface CifraProps {
  letra: string;
  cifra: string;
  chordsList: string[];
}

interface ContextNewMusicProps {
  setSongData: Dispatch<SetStateAction<SongDataProps>>;
  songData: SongDataProps;
  setChordsList: Dispatch<SetStateAction<string[]>>;
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
}

const ContextNewMusic = createContext<ContextNewMusicProps>(
  {} as ContextNewMusicProps
);

export const NewMusicContextProvider = (props: { children: ReactNode }) => {
  const [songData, setSongData] = useState<SongDataProps>({
    musica: "",
    slug: "",
    versao: "",
    artistas: [],
    compositor: "",
    tom: "",
    bpm: 0,
    video: "",
    letra: "",
    cifra: "",
    hashtags: "",
    classificacao: "",
    liturgica: false,
    chordsList: [],
  });
  /*   const [listSongs, setListSongs] = useState([{} as CifraProps]); */
  const [chordsList, setChordsList] = useState<string[]>([]);
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
        setChordsList,
        EtapaSong01,
        EtapaSong02,
      }}
    >
      {props.children}
    </ContextNewMusic.Provider>
  );
};

export const useNewMusic = () => useContext(ContextNewMusic);
