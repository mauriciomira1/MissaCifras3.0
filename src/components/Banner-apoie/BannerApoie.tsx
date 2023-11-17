import Image from "next/image";
import ButtonStyle01 from "../Buttons/ButtonStyle01";
import BackgroundImage from "../../public/images/home/banner-inf.jpg";

const BannerApoie = () => {
  return (
    <div className="w-full my-6 bg-black h-60 rounded-lg mb-2.5 flex relative justify-center items-center overflow-hidden">
      <div className="absolute w-full">
        <Image
          src={BackgroundImage}
          alt="Apoie o nosso projeto"
          className="object-cover scale-[250%] md:scale-150 lg:scale-110"
        />
      </div>
      <div className="md:px-6 px-3 relative flex items-center justify-around md:justify-around w-full">
        <p className="leading-12 cursor-default text-3xl sm:text-5xl text-white font-semibold font-highlight">
          <span className="text-tertiaryColor">APOIE O</span>
          <br /> NOSSO
          <br />
          PROJETO
        </p>
        <div className="flex sm:mx-8 flex-col items-center">
          <p className="cursor-default text-lg text-tertiaryColor font-text font-black">
            Saiba como
          </p>
          <ButtonStyle01
            className="bg-white font-semibold text-tertiaryColor duration-150 hover:bg-primaryColor mt-1"
            btnTitle="AJUDAR"
            textFont="font-highlight"
            texSize="text-3xl"
          />
        </div>
        <div className="w-0 sm:w-20 md:w-40"></div>
      </div>
    </div>
  );
};

export default BannerApoie;
