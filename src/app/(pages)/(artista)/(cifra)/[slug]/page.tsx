import MenuLateral from "./MenuLateral";
import CifraArea from "./CifraArea";

const Cifra = async ({ params }: { params: { slug: string } }) => {
  return (
    <div className="flex w-full max-w-[70rem] justify-between gap-4 px-3 py-4">
      <div className="w-48">
        {params.slug}
        {/* <MenuLateral /> */}
      </div>
      {/*       <div className="w-[70rem]"><CifraArea /></div>
      <div className="flex h-52 w-96 items-center justify-center rounded-md bg-gray-800 text-white">
        Vídeo do youtube
      </div> */}
    </div>
  );
};

export default Cifra;
