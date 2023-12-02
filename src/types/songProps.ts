import { SongDataProps } from "./songDataProps";

export type SongProps = SongDataProps & {
  id?: number;
  slug?: string;
  letra: string;
  cifra: string;
  chordsList: string[];
  qtdDeCliques?: number;
  userWhoSent: string;
};
