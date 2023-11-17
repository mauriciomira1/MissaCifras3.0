import MenuLateral from "./MenuLateral";
import CifraArea from "./CifraArea";

const Cifra = () => {
  return (
    <div className="flex gap-4 w-full max-w-[70rem] px-3 justify-between py-4">
      <div className="w-48">
        <MenuLateral />
      </div>
      <div className="w-[70rem]">
        <CifraArea />
      </div>
      <div className="flex items-center text-white justify-center w-96 h-52 rounded-md bg-gray-800">
        Vídeo do youtube
      </div>
    </div>
  );
};

export default Cifra;
