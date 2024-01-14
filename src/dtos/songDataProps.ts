export type ClassificacaoOptions =
  | "Grupo de Oração/Outros"
  | "Canto de entrada"
  | "Ato Penitencial"
  | "Glória"
  | "Aclamação"
  | "Ofertório"
  | "Santo"
  | "Cordeiro"
  | "Comunhão"
  | "Pós Comunhão"
  | "Final";

export type SongDataProps = {
  musica: string;
  slug: string;
  versao?: string | null;
  compositor?: string | null;
  tom:
    | "C"
    | "C#"
    | "D"
    | "D#"
    | "E"
    | "F"
    | "F#"
    | "G"
    | "G#"
    | "A"
    | "A#"
    | "B";
  bpm?: number | null;
  video: string;
  artistaId: string;
  participacao?: string[];
  hashtags?: string[];
  classificacao: ClassificacaoOptions[];
  liturgica: boolean;
};
