import { SongDataProps } from "./songDataProps";

export type SongProps = SongDataProps & {
  id?: string;
  slug: string;
  letra: string;
  cifra: string;
  acordes: string[];
  qtdDeCliques: number;
  userId: string;
};
