"use client";
import { useEffect, useState } from "react";
import InputData from "./InputData";

// Contextos
import { useNewMusic } from "@/contexts/useNewMusicContext";

// Tipagem
import { SongDataProps } from "@/dtos/songDataProps";

// Subcomponentes
import InputArtista from "./InputArtista";
import InputTonalidade from "./InputTonalidade";
import InputParticipacao from "./InputParticipacao";
import InputClassificacao from "./InputClassificacao";
import ObterIdDoUsuario from "@/functions/usuario/obterUsuario";
import { useSession } from "next-auth/react";

// ----------------------------------------------------------------------------

const Etapa01 = () => {
  // useContext
  const { songData, EtapaSong01, hashtagsEmString, setHashtagsEmString } =
    useNewMusic();
  const { data: userSessionData } = useSession();

  // Criação de useStates
  const [data, setData] = useState<SongDataProps>(songData || {});
  const [liturgicaChecked, setLiturgicaChecked] = useState(false);

  // Função para marcar se música é litúrgica ou não
  const handleLiturgicaChecked = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setLiturgicaChecked(ev.target.checked);
    data.liturgica = !liturgicaChecked;
    setData((prevData) => ({ ...prevData, liturgica: ev.target.checked }));
  };

  // Função para salvar os dados da música inseridos pelo usuário
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;

    if (name === "bpm") {
      setData((prevData) => ({ ...prevData, [name]: +value }));

      return;
    }

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Função para lidar com hashtags (transformando em Array)
  const handleHashtags = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setHashtagsEmString(ev.target.value);
    const { name } = ev.target;
    const arrayDeHashtags: string[] = hashtagsEmString.split(/[.,;/]/g);
    setData((prevData) => ({ ...prevData, [name]: arrayDeHashtags }));
  };

  useEffect(() => {
    // Criar slug
    if (data.musica) {
      const slug = data.musica
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ /g, "-");
      setData((prevData) => ({ ...prevData, slug }));
    }
  }, [data.musica]);

  // Cada vez que um dado do input for alterado, ele altera os dados da música (songData) através da função EtapaSong01
  useEffect(() => {
    EtapaSong01(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="py-1 font-text font-bold text-primaryColor">
        ETAPA 01 - DADOS DA MÚSICA
      </h1>

      <InputData
        placeholder="Nome da música"
        name="musica"
        maxLength={40}
        onChange={handleChange}
        value={data.musica || ""}
        required
      />

      <InputData
        placeholder="Versão (Ao Vivo em Brasília, Acústico, etc)"
        name="versao"
        maxLength={40}
        onChange={handleChange}
        value={data.versao || ""}
      />

      <div className="flex w-full flex-col gap-2">
        <InputArtista setData={setData} />

        <InputParticipacao setData={setData} data={data} />
      </div>

      <InputData
        placeholder="Nome do compositor (opcional)"
        name="compositor"
        maxLength={200}
        onChange={handleChange}
        value={data.compositor || ""}
      />

      <InputTonalidade setData={setData} />

      <div className="flex w-full items-center">
        <span className="mr-2 w-28 font-text text-sm font-bold">
          BPM <span className="text-[.7em]">(opcional)</span>:
        </span>

        <InputData
          placeholder="BPM (batimentos por minuto) - opcional"
          type="text"
          name="bpm"
          maxLength={3}
          onChange={handleChange}
          value={data.bpm || ""}
        />
      </div>

      <InputData
        placeholder="Vídeo do Youtube com a versão"
        type="url"
        name="video"
        maxLength={80}
        onChange={handleChange}
        value={data.video || ""}
      />

      <InputData
        placeholder="Palavras-chave (Exemplo: maria, jesus, amor de pai, etc)"
        name="hashtags"
        maxLength={50}
        onChange={handleHashtags}
        value={hashtagsEmString}
      />

      <InputClassificacao setData={setData} />

      <div className="flex items-center gap-2">
        <label htmlFor="liturgica" className="font-text">
          Essa música é litúrgica:
        </label>
        <input
          type="checkbox"
          name="liturgica"
          id="liturgica"
          checked={liturgicaChecked}
          onChange={handleLiturgicaChecked}
        />
      </div>
    </div>
  );
};
export default Etapa01;
