interface itemProps {
  MusicNumber: number;
  MusicName: string;
  MusicAuthor: string;
}

const MusicaTop = (props: itemProps) => {
  return (
    <div className="w-[20rem] h-28 hover:bg-[#FFF0EC] rounded-e-lg hover:border-l-2 hover:-ml-0.5 hover:border-secondaryColor text-gray-200 hover:text-secondaryColor flex items-center ">
      <div className="w-24 flex justify-center">
        <h1 className="font-text font-black text-7xl cursor-default hover:text-secondaryColor">
          {props.MusicNumber}
        </h1>
      </div>

      <div className="font-text">
        <h2 className="font-black font-text hover:text-secondaryColor text-gray-950 text-lg -mb-1 cursor-pointer">
          {props.MusicName}
        </h2>
        <h3 className="font-text text-gray-400 text-sm cursor-pointer hover:text-secondaryColor hover:font-bold">
          {props.MusicAuthor}
        </h3>
      </div>
    </div>
  );
};

export default MusicaTop;
