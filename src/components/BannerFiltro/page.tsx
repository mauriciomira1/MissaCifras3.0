import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  titulo: string;
};

const BannerFiltro = ({ image, titulo }: Props) => {
  return (
    <div className="relative flex h-32 w-full items-center justify-center overflow-hidden bg-black sm:h-44 lg:h-52 xl:my-8 xl:max-w-6xl xl:rounded-lg">
      <Image
        src={image}
        alt="Capa"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto object-cover opacity-40"
        priority
      />
      <h1 className="absolute font-highlight text-2xl font-bold uppercase text-white md:text-3xl xl:text-4xl">
        {titulo}
      </h1>
    </div>
  );
};

export default BannerFiltro;
