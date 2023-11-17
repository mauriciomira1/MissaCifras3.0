import Image from "next/image";
import ButtonStyle01 from "../Buttons/ButtonStyle01";
import PedidoOracao from "../../public/images/home/pedir-oracao.jpg";
import OracoesDaIgreja from "../../public/images/home/oracoes-igreja.jpg";

const Oracoes = () => {
  return (
    <div className="flex gap-6 w-full mt-16">
      <div className="hover:opacity-95 flex flex-col items-center justify-center p-3 w-1/2 h-44 overflow-hidden rounded-lg relative sm:h-36 bg-gradient-to-r from-[#FF985E] to-secondaryColor">
        <div className="z-10 flex flex-col items-center justify-between">
          <h2 className="font-highlight font-semibold text-white text-lg md:text-4xl uppercase mb-2 cursor-default">
            Pedido de oração
          </h2>
          <p className="font-text text-xs font-semibold text-center cursor-default text-primaryColor">
            Faça seu pedido de oração e nós oraremos por você e sua família!
          </p>
          <ButtonStyle01
            btnTitle="Enviar pedido"
            id="pedido-de-oracao"
            className="shadow-md font-text text-[.8rem] sm:text-sm md:text-base font-bold bg-white text-secondaryColor mt-3 hover:text-orange-700 hover:bg-gray-200"
          />
        </div>
        <div className="absolute object-cover scale-110">
          <Image
            src={PedidoOracao}
            alt="Pedido de oração"
            className="opacity-0 md:opacity-20 scale-150 lg:scale-125"
          />
        </div>
      </div>

      <div className="hover:opacity-95 flex flex-col items-center justify-center p-3 w-1/2 h-44 sm:h-36 overflow-hidden rounded-lg relative bg-gradient-to-l from-[#ffda5f] to-[#F8BD00]">
        <div className="z-10 flex flex-col items-center justify-between">
          <h2 className="font-highlight font-semibold text-primaryColor text-xl md:text-4xl uppercase mb-2 cursor-default">
            Orações da igreja
          </h2>
          <p className="font-text mx-0 md:mx-9 text-xs font-semibold text-center cursor-default text-primaryColor">
            Venha rezar os santos terços e as conheça as principais orações da
            santa igreja católica.
          </p>
          <ButtonStyle01
            btnTitle="Conhecer"
            id="oracoes-da-igreja"
            className="drop-shadow-md font-text text-[.8rem] sm:text-sm md:text-base font-bold bg-white text-secondaryColor mt-2 hover:text-orange-700 hover:bg-gray-200"
          />
        </div>
        <div className="absolute object-cover scale-110">
          <Image
            src={PedidoOracao}
            alt="Pedido de oração"
            className="opacity-0 md:opacity-20 scale-150 lg:scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Oracoes;
