"use client";

import { useNewMusic } from "@/contexts/useNewMusicContext";
import { useEffect, useState } from "react";

const Etapa02 = () => {
  const { EtapaSong02 } = useNewMusic();

  const [letraDaMusica, setLetraDaMusica] = useState("");
  const [musicaCifrada, setMusicaCifrada] = useState("");
  const [acordes, setAcordes] = useState<string[]>([]);

  // Obtendo acordes a partir da cifra inserida
  const capturarAcordes = (novaCifra: string) => {
    const capturandoAcordes = novaCifra.match(/&[^&\s]+/g);
    if (capturandoAcordes) {
      const novosAcordes = capturandoAcordes.map((acorde: string) =>
        acorde.slice(1),
      );
      setAcordes(novosAcordes);
    }
  };

  // Obtendo letra a partir da cifra inserida
  const capturarLetraDaMusica = (novaCifra: string) => {
    const capturandoLetraDaMusica = novaCifra.replace(/&[^&\s]+/g, "");

    setLetraDaMusica(capturandoLetraDaMusica);
  };

  const handleChangeCifra = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const novaCifra = ev.target.value;
    setMusicaCifrada(novaCifra);
    capturarAcordes(novaCifra);
    capturarLetraDaMusica(novaCifra);
    EtapaSong02({
      cifraDaMusica: musicaCifrada,
      letra: letraDaMusica,
      acordes,
    });
  };

  useEffect(() => {
    EtapaSong02({
      acordes,
      cifraDaMusica: musicaCifrada,
      letra: letraDaMusica,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicaCifrada]);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="py-1 font-text font-bold text-primaryColor">
        ETAPA 02 - CIFRA DA MÚSICA
      </h1>
      <textarea
        name=""
        id=""
        cols={30}
        rows={18}
        className="w-full rounded bg-gray-200 text-sm"
        value={musicaCifrada}
        onChange={handleChangeCifra}
      ></textarea>
    </div>
  );
};

export default Etapa02;
