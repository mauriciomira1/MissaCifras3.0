import Image, { StaticImageData } from "next/image";

interface itemProps {
  idAuthor: string;
  MusicNumber: number;
  Author: string;
  MusicName: string;
  Photo: StaticImageData;
}

const ArtistaTop = (props: itemProps) => {
  return (
    <div className="w-64 h-28 text-gray-200 flex items-center justify-between rounded-s-lg hover:border-r-2 hover:border-primaryColor hover:bg-[#F5F5F5]">
      <div className="overflow-hidden rounded-full ml-4 w-32">
        <Image
          src={props.Photo}
          alt={props.Author}
          id={props.idAuthor}
          width={100}
          height={100}
        />
      </div>

      <div className="absolute -mt-11 ml-2 flex justify-center rounded-full bg-secondaryColor ">
        <h1 className="w-6 h-6 text-center font-text font-black text-base cursor-default">
          {props.MusicNumber}
        </h1>
      </div>

      <div className="flex flex-col font-text right-0 end-0 mr-2">
        <h2 className="text-right uppercase leading-5 font-highlight font-semibold text-primaryColor text-xl cursor-pointer hover:text-secondaryColor">
          {props.Author}
        </h2>
        <h3 className="text-right font-text hover:text-secondaryColor hover:font-bold text-gray-400 -mb-1 cursor-pointer text-sm">
          {props.MusicName}
        </h3>
      </div>
    </div>
  );
};

export default ArtistaTop;
