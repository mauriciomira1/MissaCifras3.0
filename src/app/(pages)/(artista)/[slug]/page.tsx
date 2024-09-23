import { SongProps } from "@/dtos/songProps";
import ObterCifraAPartirDeSlug from "@/functions/obterCifraAPartirDeSlug/ObterCifraAPartirDeSlug";
import { useEffect, useState } from "react";

const Artista = ({ params }: { params: { slug: string } }) => {
  const [cifra, setCifra] = useState<SongProps>();

  const obterCifra = async () => {
    const cifra = await ObterCifraAPartirDeSlug(params.slug);
    cifra && setCifra(cifra);
  };

  useEffect(() => {
    obterCifra();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
};

export default Artista;
