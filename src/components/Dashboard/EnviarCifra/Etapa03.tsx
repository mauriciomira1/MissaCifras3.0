"use client";
import "./etapa03e04.css";
import { useNewMusic } from "@/contexts/useNewMusicContext";
import { useCallback, useEffect, useRef, useState } from "react";

const Etapa03 = () => {
  const { songData, EtapaSong03 } = useNewMusic();

  const [musicaCifrada, setMusicaCifrada] = useState("");
  const [acordes, setAcordes] = useState<string[]>([]);

  const formatandoLetraDaMusica = useCallback(() => {
    const letraComEspacamento = songData.letra?.replace(/\n/g, "\n\n");
    setFormatedLetra(letraComEspacamento || "");
  }, [songData.letra]);

  const capturarAcordes = (novaCifra: any) => {
    const capturandoAcordes = novaCifra.match(/&[^&\s]+/g);
    if (capturandoAcordes) {
      const novosAcordes = capturandoAcordes.map((acorde: any) =>
        acorde.slice(1)
      );

      setAcordes(novosAcordes);
    }
  };

  const handleChangeCifra = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const novaCifra = ev.target.value;
    setMusicaCifrada(novaCifra);
    capturarAcordes(novaCifra);
    EtapaSong03({ cifraDaMusica: musicaCifrada, acordes });
  };

  /* 
  SE O USUÁRIO TROCAR ALGUMA PALAVRA EM 'letra'
  1 - mapear a string musicaCifrada, mapear a string letra (já modificada) 
  2- Comparar e trazer a palavra que falta na musicaCifrada
  3- Procurar a palavra que sobra na 'letra'
  3 - Entrar em musicaCifrada e alterar a palavra de 2 pela palavra de 3
  */

  useEffect(() => {
    formatandoLetraDaMusica();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songData.letra]);

  /*   useEffect(() => {
    const capturandoAcordes = musicaCifrada.match(/&[^&\s]+/g);
    if (capturandoAcordes) {
      const novosAcordes = capturandoAcordes.map((acorde) => acorde.slice(1));

      setAcordes(novosAcordes);
    }
  }, [musicaCifrada]); */

  useEffect(() => {
    const novaLetra = formatedLetra;
    setMusicaCifrada(novaLetra);
  }, [formatedLetra]);

  console.log(songData.chordsList);
  console.log(musicaCifrada);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="font-text text-primaryColor py-1 font-bold">
        ETAPA 03 - CIFRA
      </h1>
      <textarea
        name=""
        id=""
        cols={30}
        rows={18}
        className="bg-gray-200 w-full rounded text-sm"
        value={musicaCifrada}
        onChange={handleChangeCifra}
      ></textarea>
    </div>
  );
};

export default Etapa03;
