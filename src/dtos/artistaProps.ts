export type ArtistaProps = {
  nome: string;
  qtdDeCliques: number;
  slug?: string;
  capa?: string;
  cifras?: string[];
};

export type ArtistaBancodeDadosProps = {
  id?: string;
  nome: string;
  qtdDeCliques: number;
  capa?: string | null;
  slug: string;
  createdAt?: Date;
  updatedAt?: Date;
};
