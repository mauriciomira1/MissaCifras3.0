"use client";

import { useNewMusic } from "@/contexts/useNewMusicContext";
import { useEffect, useState } from "react";

const Etapa02 = () => {
  const { EtapaSong02 } = useNewMusic();

  const [letraDaMusica, setLetraDaMusica] = useState("");
  const [musicaCifrada, setMusicaCifrada] = useState("");
  const [acordes, setAcordes] = useState<string[]>([]);

  const handleChangeCifra = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const novaCifra = ev.target.value;
    setMusicaCifrada(novaCifra);
    capturarAcordes(novaCifra);
    EtapaSong03({ cifraDaMusica: musicaCifrada, acordes });
  };

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
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Etapa02;
