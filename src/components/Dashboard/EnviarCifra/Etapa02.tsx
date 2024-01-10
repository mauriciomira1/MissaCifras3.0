"use client";

import { useNewMusic } from "@/contexts/useNewMusicContext";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  setBotaoAtivado: Dispatch<SetStateAction<boolean>>;
};

const Etapa02 = ({ setBotaoAtivado }: Props) => {
  const {
    EtapaSong02,
    musicaCifradaComCaractereEspecial,
    setMusicaCifradaComCaractereEspecial,
  } = useNewMusic();

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
  const capturarLetraDaMusica = (musicaComCifra: string) => {
    const capturandoLetraDaMusica = musicaComCifra.replace(/&[^&\s]+/g, "");

    setLetraDaMusica(capturandoLetraDaMusica);
  };

  const lidandoComMusicaCifrada = (musicaComCifra: string) => {
    const cifra = musicaComCifra.replace(/&/g, "");
    return cifra;
  };

  const handleChangeCifra = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const novaCifra = ev.target.value;
    setMusicaCifrada(novaCifra);
    capturarAcordes(novaCifra);
    setMusicaCifradaComCaractereEspecial(novaCifra);
    const cifra = lidandoComMusicaCifrada(novaCifra);
    capturarLetraDaMusica(novaCifra);
    EtapaSong02({
      cifraDaMusica: cifra,
      letra: letraDaMusica,
      acordes,
    });
  };

  useEffect(() => {
    if (musicaCifrada.length > 0) {
      setBotaoAtivado(true);
    } else {
      setBotaoAtivado(false);
    }
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
        className="w-full rounded bg-gray-200 p-1 text-sm"
        value={musicaCifradaComCaractereEspecial || musicaCifrada}
        onChange={handleChangeCifra}
      ></textarea>
    </div>
  );
};

export default Etapa02;
