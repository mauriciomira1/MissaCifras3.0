import Image, { StaticImageData } from "next/image";

interface CoverSecondaryItemProps {
  cover01: StaticImageData;
  title01: string;
}

const CoverSecondaryItem = ({ cover01, title01 }: CoverSecondaryItemProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg cursor-pointer w-1/3 lg:h-48">
      <Image
        src={cover01}
        alt={title01}
        className="w-full object-center transition-transform duration-300 bg-cover transform scale-100 hover:scale-105"
      />
    </div>
  );
};

export default CoverSecondaryItem;
