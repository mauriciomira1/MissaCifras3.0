import Link from "next/link";

// Componentes
import Welcome from "@/components/Dashboard/Welcome";
import ButtonStyle01 from "@/components/Buttons/ButtonStyle01";

// Ícones
import { FaArrowRight } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { IoGiftOutline } from "react-icons/io5";

export const metadata = {
  title: "Minha Dashboard",
};

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col justify-center">
      {<Welcome />}
      <div className="w-full rounded-lg border">
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
        <Link
          href="/dashboard/playlists"
          className="flex w-full items-center justify-center py-4 hover:opacity-70"
        >
          <FaCirclePlus color="orange" size={20} />
        </Link>
      </div>

      <div className="flex w-full items-center justify-between py-5 font-text font-bold">
        <ButtonStyle01
          btnTitle="ir para home"
          className="bg-primaryColor uppercase text-white hover:opacity-80 active:opacity-90"
        />
        <ButtonStyle01
          btnTitle="indique"
          icon={IoGiftOutline}
          className="border border-gray-300 px-6 uppercase text-primaryColor hover:opacity-80 active:bg-tertiaryColor"
        />
      </div>
      <div>
        <h2 className="font-text text-lg font-bold text-primaryColor">
          Saiba quem somos nós
        </h2>
        <Link href="/quem-somos">
          <ButtonStyle01
            btnTitle="sobre nós"
            className="border border-gray-300 px-6 uppercase text-primaryColor hover:opacity-80 active:bg-tertiaryColor"
          />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
