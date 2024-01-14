"use client";

// Hooks
import { useState } from "react";

// Contextos
import { useNewMusic } from "@/contexts/useNewMusicContext";
import { useSession } from "next-auth/react";

// Componentes
import Btn from "@/components/Dashboard/EnviarCifra/Btn";
import Etapa01 from "@/components/Dashboard/EnviarCifra/Etapa01";
import Etapa02 from "@/components/Dashboard/EnviarCifra/Etapa02";
import Etapa03 from "@/components/Dashboard/EnviarCifra/Etapa03";

// Diálogo para confirmação de criação de nova cifra
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/shadcn/ui/alert-dialog";

import CriarNovaMusica from "@/functions/dashboard/musica/criarNovaMusica";

// Componentes Shadcnui
/* import { ToastContainer, toast } from "react-toastify";
 */
import toast, { Toaster } from "react-hot-toast";

import LoadingButton from "@/components/LoadingButton/LoadingButton";
import { useRouter } from "next/navigation";
import { SongProps } from "@/dtos/songProps";

// ----------------------------------------------------------------------------

const EnviarCifraComponent = () => {
  const { songData, setSongData } = useNewMusic();

  // Dados da sessão do usuário e status de login
  const { data, status } = useSession();

  // Toast para confirmação criação de nova cifra

  // Rotas do Next
  const router = useRouter();

  const [etapaAtual, setEtapaAtual] = useState(0);
  const [btnState, setBtnState] = useState(true);

  // Estado para botão de 'Próximo' apenas quando as condições forem satisfeitas
  const [botaoAtivado, setBotaoAtivado] = useState(false);

  // Loading para o botão de 'Enviar', enquanto a música é criada no banco
  const [isLoading, setIsLoading] = useState(false);

  // Constante para a janela de confirmação de criação de nova música
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const selectedBtn =
    "font-text text-green-400 text-xl align-middle font-bold border-2 border-green-400 rounded-md h-8 w-8";

  const inactiveBtn =
    "font-text text-gray-900 text-xl align-middle font-bold bg-gray-300 rounded-md h-8 w-8";

  const btnProximo = (ev: React.FormEvent) => {
    ev.preventDefault();
    setEtapaAtual((etapaAtual) => etapaAtual + 1);
    if (etapaAtual === 1) {
      setBtnState(false);
    }
  };

  const btnAnterior = (ev: React.FormEvent) => {
    ev.preventDefault();
    setEtapaAtual((etapaAtual) => etapaAtual - 1);
    if (etapaAtual < 3) {
      setBtnState(true);
    }
  };

  const enviarNovaMusica = async () => {
    setIsLoading(true);
    try {
      await CriarNovaMusica({ data, status, songData });
      setIsLoading(false);
      router.push("/dashboard");
      setSongData({} as SongProps);
    } catch (error) {
      toast.error("Não possível salvar. Tente novamente mais tarde.");
      console.log(error);
    }
  };

  const renderDaEtapaAtual = () => {
    switch (etapaAtual) {
      case 0:
        return <Etapa01 setBotaoAtivado={setBotaoAtivado} />;

      case 1:
        return <Etapa02 setBotaoAtivado={setBotaoAtivado} />;

      case 2:
        return <Etapa03 />;

      default:
        return null;
    }
  };

  /*   const submitEtapa01 = (handleSubmit: any) => {
    handleSubmit();
  };
  const submitEtapa01 = ({
    handleSubmit,
  }: UseFormHandleSubmit<FieldValues, undefined>) => {
    handleSubmit();
  }; */

  const Notificar = () => {
    toast.promise(enviarNovaMusica(), {
      loading: "Salvando...",
      success: <b>Cifra enviada. Obrigado por compartilhar!</b>,
      error: <b>Não possível salvar. Tente novamente mais tarde.</b>,
    });
  };

  return (
    <>
      <AlertDialog open={isConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Criar nova cifra</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja enviar essa cifra?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setIsConfirmOpen(false);
              }}
            >
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => Notificar()}>
              Criar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <form className="my-6 flex w-full flex-col items-center gap-2">
        <h1 className="font-text text-2xl font-black text-primaryColor md:text-4xl">
          DASHBOARD
        </h1>
        {/* Implantar no futuro */}
        {/* <div className="mb-5 mt-2 flex w-full justify-center gap-1">
        <button
          className={etapaAtual === 0 ? selectedBtn : inactiveBtn}
          id="btn01"
          onClick={(ev) => {
            ev.preventDefault();
            setEtapaAtual(0);
          }}
        >
          1
        </button>
        <button
          className={etapaAtual === 1 ? selectedBtn : inactiveBtn}
          id="btn02"
          onClick={(ev) => {
            ev.preventDefault();
            setEtapaAtual(1);
          }}
        >
          2
        </button>

        <button
          className={etapaAtual === 2 ? selectedBtn : inactiveBtn}
          id="btn03"
          onClick={(ev) => {
            ev.preventDefault();
            setEtapaAtual(2);
          }}
        >
          3
        </button>
      </div> */}
        <div className="w-full">{renderDaEtapaAtual()}</div>
        <div className="flex w-full justify-between">
          {etapaAtual === 0 ? (
            <div></div>
          ) : (
            <Btn name="ANTERIOR" id="btnAnterior" onClick={btnAnterior} />
          )}
          {btnState === true ? (
            <Btn
              name="PRÓXIMO"
              id="btnProximo"
              onClick={btnProximo}
              disabled={!botaoAtivado}
            />
          ) : isLoading ? (
            <LoadingButton iconColor="white" />
          ) : (
            <Btn
              name="ENVIAR"
              id="Enviar"
              onClick={(ev) => {
                ev.preventDefault();
                setIsConfirmOpen(true);
              }}
            />
          )}
          <Toaster position="bottom-center" reverseOrder={false} />
        </div>
      </form>
    </>
  );
};

export default EnviarCifraComponent;
