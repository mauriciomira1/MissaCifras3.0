import Link from "next/link";

// Componentes
import Welcome from "@/components/Dashboard/Welcome";
import ButtonStyle01 from "@/components/Buttons/ButtonStyle01";

// Ícones
import { FaArrowRight } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { IoGiftOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

export const metadata = {
  title: "Minha Dashboard",
};

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col justify-center">
      {<Welcome />}
      <div className="mb-4 w-full rounded-lg border">
        <h2 className="px-4 py-3 font-text text-lg font-bold text-primaryColor">
          Minhas playlists
        </h2>

        <div className="h-[1px] bg-gray-300"></div>

        <div className="flex flex-col gap-1.5 px-4 py-3">
          <Link
            href=""
            className="flex items-center gap-2 font-text text-primaryColor"
          >
            Missa Natal <FaArrowRight size={14} />
          </Link>
          <Link
            href=""
            className="flex items-center gap-2 font-text text-primaryColor"
          >
            Missa 12/12/2023 <FaArrowRight size={14} />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            href="/dashboard/playlists"
            className="mb-6 mt-3 flex items-center gap-2 rounded-md border border-red-300 px-4 py-2 hover:bg-red-200 active:bg-red-500"
          >
            <p className="font-text font-bold text-primaryColor">Ver todos</p>
            <FaCirclePlus color="orange" size={18} />
          </Link>
        </div>
      </div>

      <div className="flex w-full items-center justify-between py-5 font-text font-bold">
        <Link href="/">
          <ButtonStyle01
            btnTitle="ir para home"
            className="bg-primaryColor uppercase text-white hover:opacity-80 active:opacity-90"
          />
        </Link>
        <ButtonStyle01
          btnTitle="indique"
          icon={IoGiftOutline}
          className="border border-gray-300 px-6 uppercase text-primaryColor hover:opacity-80 active:bg-tertiaryColor"
        />
      </div>

      <div className="mt-10 flex w-full flex-col items-center justify-center">
        <h2 className="text-center font-text text-lg font-bold uppercase text-primaryColor">
          Saiba quem somos nós
        </h2>
        <Link
          href="/quem-somos"
          className="mt-2 flex w-auto items-center justify-center"
        >
          <ButtonStyle01
            btnTitle="sobre nós"
            className="border border-gray-300 px-6 font-text font-bold uppercase text-primaryColor hover:bg-primaryColor hover:text-white active:bg-tertiaryColor"
          />
        </Link>
      </div>

      <div className="my-12 h-[1px] w-full bg-gray-300"></div>

      <div className="">
        <h2 className="font-text text-lg font-bold uppercase text-primaryColor">
          Quer enviar uma cifra?
        </h2>
        <Link href="/dashboard/enviar-cifra" className="mt-2 flex w-full">
          <ButtonStyle01
            btnTitle="Enviar cifra"
            icon={FiEdit}
            className="bg-primaryColor px-6 py-2 font-text font-bold uppercase text-white hover:opacity-80 active:bg-tertiaryColor"
          />
        </Link>
      </div>
      <p className="mt-16 font-text text-sm font-semibold text-primaryColor">
        Acesse o menu para mais opções
      </p>
    </div>
  );
};

export default Dashboard;
