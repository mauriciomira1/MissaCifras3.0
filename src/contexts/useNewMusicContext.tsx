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
  slug: string;
  versao?: string;
  compositor?: string;
  tom: string;
  bpm?: number;
  video: string;
  letra: string;
  cifra: string;
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
  chordsList: chordsListProps[];
}

interface chordsListProps {
  acorde: string;
}

// Será substituído pelo CifraProps
/* interface ListSongsProps extends SongDataProps {
  letra: string;
  cifra: CifraProps;
} */

interface ContextNewMusicProps {
  setSongData: Dispatch<SetStateAction<SongDataProps>>;
  setLetra: Dispatch<SetStateAction<string>>;
  setCifra: Dispatch<SetStateAction<CifraProps>>;
  songData: SongDataProps;
  letra: string;
  cifra?: CifraProps;
  chordsList: chordsListProps[];
  setChordsList: Dispatch<SetStateAction<chordsListProps[]>>;
  EtapaSong01: (data: SongDataProps) => void;
  EtapaSong02: (data: string) => void;
  EtapaSong03: () => void;
}

const ContextNewMusic = createContext<ContextNewMusicProps>(
  {} as ContextNewMusicProps
);

export const NewMusicContextProvider = (props: { children: ReactNode }) => {
  const [songData, setSongData] = useState<SongDataProps>({
    musica: "",
    versao: "",
    artistas: "",
    compositor: "",
    tom: "",
    bpm: 0,
    video: "",
    hashtags: "",
    classificacao: "",
    liturgica: false,
  });
  const [listSongs, setListSongs] = useState([{} as ListSongsProps]);
  const [letra, setLetra] = useState<string>("");
  const [cifra, setCifra] = useState<CifraProps>({} as CifraProps);
  const [chordsList, setChordsList] = useState<chordsListProps[]>([]);
  const EtapaSong01 = (data: SongDataProps) => {
    setSongData((prevState) => ({
      ...prevState,
      musica: data.musica,
      versao: data.versao,
      cantor: data.cantor,
      compositor: data.compositor,
      tom: data.tom,
      bpm: data.bpm,
      video: data.video,
      hashtags: data.hashtags,
      classificacao: data.classificacao,
      liturgica: data.liturgica,
    }));
  };

  const EtapaSong02 = (data: string) => {
    setLetra(data);
  };

  const EtapaSong03 = () => {
    setCifra({
      letra,
      chordsList,
    });
  };

  return (
    <ContextNewMusic.Provider
      value={{
        setSongData,
        setLetra,
        setCifra,
        songData,
        letra,
        cifra,
        chordsList,
        setChordsList,
        EtapaSong01,
        EtapaSong02,
        EtapaSong03,
      }}
    >
      {props.children}
    </ContextNewMusic.Provider>
  );
};

export const useNewMusic = () => useContext(ContextNewMusic);
