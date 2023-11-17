"use client";
import { ReactNode, useEffect, useState } from "react";
import InputData from "./InputData";
import { useNewMusic } from "@/contexts/useNewMusicContext";

interface DataProps {
  musica: string;
  versao: string;
  cantor: string;
  compositor: string;
  tom: string;
  bpm: number;
  video: string;
  hashtags: string;
  momentoDaMissa: string;
  liturgica: boolean;
}

const Etapa01 = () => {
  const { EtapaSong01, songData } = useNewMusic();
  const [data, setData] = useState<DataProps>(songData || {});
  const [checked, setChecked] = useState(false);

  const handleChecked = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(ev.target.checked);
    data.liturgica = !checked;
  };

  useEffect(() => {
    localStorage.setItem("dataSong", JSON.stringify(data));
    EtapaSong01(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleChange = (ev: any) => {
    const { name, value } = ev.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="font-text text-primaryColor py-1 font-bold">
        ETAPA 01 - DADOS DA MÚSICA
      </h1>
      <InputData
        placeholder="Nome da música"
        name="musica"
        onChange={handleChange}
        value={data.musica}
      />
      <InputData
        placeholder="Versão (Ao Vivo em Brasília, Acústico, etc)"
        name="versao"
        onChange={handleChange}
        value={data.versao}
      />
      <InputData
        placeholder="Cantor ou Banda"
        name="cantor"
        onChange={handleChange}
        value={data.cantor}
      />
      <InputData
        placeholder="Nome do compositor (opcional)"
        name="compositor"
        onChange={handleChange}
        value={data.compositor}
      />
      <select
        className="w-full rounded items-center focus:bg-white bg-gray-200 h-8 px-2 placeholder:text-sm text-gray-800 text-sm"
        onChange={handleChange}
        value={data.tom}
        name="tom"
      >
        <option value="" disabled>
          Tom da música
        </option>
        <option value="C">C</option>
        <option value="C#">C#</option>
        <option value="D">D</option>
        <option value="D#">D#</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="F#">F#</option>
        <option value="G">G</option>
        <option value="G#">G#</option>
        <option value="A">A</option>
        <option value="A#">A#</option>
        <option value="B">B</option>
      </select>
      <div className="w-full flex items-center">
        <span className="mr-2 font-bold font-text text-sm w-28">
          BPM <span className="text-[.8em]">(opcional)</span>:
        </span>
        <InputData
          placeholder="BPM (batimentos por minuto)"
          type="text"
          name="bpm"
          onChange={handleChange}
          value={+data.bpm}
        />
      </div>
      <InputData
        placeholder="Vídeo do Youtube com a versão"
        type="url"
        name="video"
        onChange={handleChange}
        value={data.video}
      />
      <InputData
        placeholder="Palavras-chave (Exemplo: maria, jesus, amor de pai, etc)"
        name="hashtags"
        onChange={handleChange}
        value={data.hashtags}
      />
      <select
        className="w-full rounded items-center focus:bg-white bg-gray-200 h-8 px-2 placeholder:text-sm text-gray-800 text-sm"
        onChange={handleChange}
        value={data.momentoDaMissa}
        name="momentoDaMissa"
      >
        <option value="" disabled>
          Selecione o momento da missa
        </option>
        <option value="Canto de entrada">Canto de entrada</option>
        <option value="Ato Penitencial">Ato Penitencial</option>
        <option value="Glória">Glória</option>
        <option value="Aclamação">Aclamação ao Evangelho</option>
        <option value="Ofertório">Ofertório</option>
        <option value="Santo">Santo</option>
        <option value="Cordeiro">Cordeiro</option>
        <option value="Comunhão">Comunhão</option>
        <option value="Pós Comunhão">Pós Comunhão</option>
        <option value="Final">Final</option>
      </select>
      <div className="flex items-center gap-2">
        <label htmlFor="liturgica" className="font-cifra">
          Essa música é litúrgica:
        </label>
        <input
          type="checkbox"
          name="liturgica"
          id="liturgica"
          checked={checked}
          onChange={handleChecked}
        />
      </div>
    </div>
  );
};

export default Etapa01;
