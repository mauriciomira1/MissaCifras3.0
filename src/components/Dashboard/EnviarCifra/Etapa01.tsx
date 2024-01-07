"use client";
import { useEffect, useState } from "react";
import InputData from "./InputData";

//Importações de formulário
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Contextos
import { useNewMusic } from "@/contexts/useNewMusicContext";

// Tipagem
import { SongDataProps } from "@/dtos/songDataProps";

// Subcomponentes
import InputArtista from "./InputArtista";
import InputTonalidade from "./InputTonalidade";
import InputParticipacao from "./InputParticipacao";
import InputClassificacao from "./InputClassificacao";

// ----------------------------------------------------------------------------

/* const newSongDataFormSchema = z.object({
  musica: z
    .string()
    .min(1, { message: "O nome da música é obrigatório." })
    .max(40, { message: "O limite máximo são 40 caracteres." }),
  versao: z.string().max(40, "O limite máximo são 40 caracteres."),
  compositor: z.string().max(40, "O limite máximo são 40 caracteres."),
  tom: z.string().min(1, "A tonalidade da música é obrigatória.").max(2),
  bpm: z.number().max(3).int(),
  video: z.string().max(50, "O limite máximo são 50 caracteres."),
  participacao: z.array(
    z.string().max(40, "O limite máximo são 40 caracteres."),
  ),
  hashtags: z.array(z.string().max(20, "O limite máximo são 20 caracteres.")),
  classificacao: z
    .string()
    .max(20)
    .min(1, "É obrigatório escolher uma classificação."),
  liturgica: z.boolean(),
});

type newSongDataFormProps = z.infer<typeof newSongDataFormSchema>; */

// ----------------------------------------------------------------------------

const Etapa01 = () => {
  // Validação dos inputs
  /*   const {
    register,
    formState: { errors },
  } = useForm<newSongDataFormProps>({
    resolver: zodResolver(newSongDataFormSchema),
    mode: "onBlur",
  }); */

  // useContext
  const { songData } = useNewMusic();

  // Criação de useStates
  const [data, setData] = useState<SongDataProps>(songData || {});
  const [stringDeHashtags, setStringDeHashtags] = useState("");
  const [liturgicaChecked, setLiturgicaChecked] = useState(false);

  // Função para marcar se música é litúrgica ou não
  const handleLiturgicaChecked = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setLiturgicaChecked(ev.target.checked);
    data.liturgica = !liturgicaChecked;
  };

  // Função para salvar os dados da música inseridos pelo usuário
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Função para lidar com hashtags (transformando em Array)
  const handleHashtags = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setStringDeHashtags(ev.target.value);
    const { name } = ev.target;
    const arrayDeHashtags: string[] = stringDeHashtags.split(/[.,;/]/g);
    setData((prevData) => ({ ...prevData, [name]: arrayDeHashtags }));
  };

  useEffect(() => {
    console.log(data);
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
        value={data.musica}
        required
      />

      <InputData
        placeholder="Versão (Ao Vivo em Brasília, Acústico, etc)"
        name="versao"
        maxLength={40}
        onChange={handleChange}
        value={data.versao}
      />

      <div className="flex w-full flex-col gap-2">
        <InputArtista setData={setData} data={data} />

        <InputParticipacao setData={setData} data={data} />
      </div>

      <InputData
        placeholder="Nome do compositor (opcional)"
        name="compositor"
        maxLength={40}
        onChange={handleChange}
        value={data.compositor}
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
          value={data.bpm}
        />
      </div>

      <InputData
        placeholder="Vídeo do Youtube com a versão"
        type="url"
        name="video"
        maxLength={80}
        onChange={handleChange}
        value={data.video}
      />

      <InputData
        placeholder="Palavras-chave (Exemplo: maria, jesus, amor de pai, etc)"
        name="hashtags"
        maxLength={50}
        onChange={handleHashtags}
        value={stringDeHashtags}
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
