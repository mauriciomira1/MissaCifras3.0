import Image from "next/image";
import ButtonStyle01 from "../Buttons/ButtonStyle01";
import igreja from "../../public/images/home/catedral.png";

const QuemSomos = () => {
  return (
    <div className="flex flex-col w-full mt-8 items-center justify-center relative">
      <div className="flex items-center">
        <h2 className="w-full leading-12 font-semibold cursor-default text-5xl text-tertiaryColor font-highlight m-10">
          <span className="text-primaryColor">QUEM</span> SOMOS
        </h2>
      </div>
      <div className="flex flex-col w-full items-start mb-56 ml-3 md:ml-6">
        <p className="max-w-xl w-11/12 md:w-full text-sm md:text-base font-text font-semibold mb-4 md:leading-8 text-primaryColor">
          Nós somos músicos do Ministério de Música Coração da Mãe e
          profissionais da área de tecnologia da informação. Há mais de uma
          década, tocamos em missas na Paróquia São Sebastião do Gama, em
          Brasília. Com o intuito de levar uma música litúrgica de qualidade
          para músicos em todo o Brasil, criamos este site. Nosso objetivo é
          valorizar as músicas litúrgicas e ajudar músicos a crescerem cada vez
          mais em sua capacidade de acompanhar e respeitar a liturgia da Santa
          Missa. Para isso, oferecemos cifras precisas e corretas, contribuindo
          para aprimorar a maestria dos músicos católicos.
        </p>
        <ButtonStyle01
          btnTitle="SAIBA MAIS"
          id="saiba-mais"
          className="border-2 font-bold rounded border-primaryColor hover:bg-primaryColor hover:text-white active:bg-primaryColor active:text-white"
        />
      </div>
      <p className="absolute font-text font-semibold mb-4 leading-8 text-primaryColor start-2 bottom-0 w-full text-sm">
        Cantai ao Senhor um cântico novo. Cantai ao Senhor, terra inteira.
        Salmos 95:1
      </p>
      <Image
        src={igreja}
        alt="Catedral"
        width={550}
        className="absolute opacity-5 md:opacity-10 end-0 bottom-6 -z-10"
      />
    </div>
  );
};

export default QuemSomos;
