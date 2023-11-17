import Image from "next/image";
import coverMainImg from "../../public/images/home/cover-main.jpg";
import ButtonStyle01 from "../Buttons/ButtonStyle01";

export default function CoverMain() {
  const titleCoverMain = "Nova aula do Missionário Shalom";

  return (
    <div className="w-full bg-black h-60 rounded-lg mb-2.5 flex relative justify-center items-center overflow-hidden">
      <div className="absolute lg:-bottom-80 w-full">
        <Image
          src={coverMainImg}
          alt={titleCoverMain}
          className="object-cover transition-transform duration-300 opacity-50 transform scale-110 hover:scale-125"
        />
      </div>
      <div className="absolute flex flex-col items-center">
        <h1 className="cursor-default text-3xl text-white font-highlight">
          MISSIONÁRIO
        </h1>
        <h2 className="cursor-default text-6xl text-tertiaryColor font-highlight font-black">
          SHALOM
        </h2>
        <ButtonStyle01
          className="bg-white opacity-60 text-primaryColor duration-150 hover:opacity-90 hover:bg-secondaryColor mt-2 text-lg font-text font-bold"
          btnTitle="Nova aula disponível"
        />
        <p className="font-text font-medium text-sm text-white drop-shadow-sm cursor-default mt-1">
          Professor Vitor Santiago
        </p>
      </div>
    </div>
  );
}
