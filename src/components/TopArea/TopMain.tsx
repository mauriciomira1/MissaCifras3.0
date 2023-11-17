import TopAcessadas from "./TopAcessadas";
import TopArtistas from "./TopArtistas";

const TopMain = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 flex-wrap lg:justify-between w-full px-4 lg:flex-wrap">
      <TopAcessadas />
      <TopArtistas />
    </div>
  );
};

export default TopMain;
