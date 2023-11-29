"use client";

import { useNewMusic } from "@/contexts/useNewMusicContext";
import { useEffect, useState } from "react";

const Etapa02 = () => {
  const { EtapaSong02 } = useNewMusic();

  const [letraDaMusica, setLetraDaMusica] = useState("");
  const [musicaCifrada, setMusicaCifrada] = useState("");
  const [acordes, setAcordes] = useState<string[]>([]);

  const capturarAcordes = (novaCifra: string) => {
    const capturandoAcordes = novaCifra.match(/&[^&\s]+/g);
    if (capturandoAcordes) {
      const novosAcordes = capturandoAcordes.map((acorde: string) =>
        acorde.slice(1)
      );
      setAcordes(novosAcordes);
    }
  };

  const capturarLetraDaMusica = (novaCifra: string) => {
    const capturandoLetraDaMusica = novaCifra.match(/[^&\s]+/g);
    if (capturandoLetraDaMusica) {
      const novaLetraDaMusica = capturandoLetraDaMusica.join("");
      setLetraDaMusica(novaLetraDaMusica);
    }
  };

  const handleChangeCifra = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const novaCifra = ev.target.value;
    setMusicaCifrada(novaCifra);
    capturarAcordes(novaCifra);
    capturarLetraDaMusica(novaCifra);
  };

  useEffect(() => {
    EtapaSong02({
      cifraDaMusica: musicaCifrada,
      letra: letraDaMusica,
      acordes,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letraDaMusica]);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="font-text text-primaryColor py-1 font-bold">
        ETAPA 02 - CIFRA DA MÚSICA
      </h1>
      <textarea
        name=""
        id=""
        cols={30}
        rows={18}
        className="bg-gray-200 w-full rounded text-sm"
        value={letraDaMusica}
        onChange={handleChangeCifra}
      ></textarea>
    </div>
  );
};

export default Etapa02;
