// Importando imagens
import cover01 from "../../public/images/home/cover01.jpg";
import cover02 from "../../public/images/home/cover02.jpg";
import cover03 from "../../public/images/home/cover03.jpg";
import CoverSecondaryItem from "./CoverSecondaryItem";

const CoverSecondary = () => {
  const title01 = "Palavras do Papa francisco";
  const title02 = "A história por trás da letra";
  const title03 = "Afinal, pra quê ensaio?";
  const redirectLink = (address: string) => {
    const LinkPalavrasDoPapa = address;
    window.location.href = LinkPalavrasDoPapa;
  };
  return (
    <div
      /*       onClick={(address) => redirectLink("/palavras-do-papa")} */
      className="flex justify-between max-w-[90rem] w-auto gap-2"
    >
      <CoverSecondaryItem cover01={cover01} title01={title01} />
      <CoverSecondaryItem cover01={cover02} title01={title02} />
      <CoverSecondaryItem cover01={cover03} title01={title03} />
    </div>
  );
};

export default CoverSecondary;
