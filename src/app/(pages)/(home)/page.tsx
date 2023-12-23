import BannerApoie from "@/components/Banner-apoie/BannerApoie";
import CoverMain from "@/components/CoverMain/CoverMain";
import CoverSecondary from "@/components/CoverSecondary/CoverSecondary";
import Oracoes from "@/components/Oracoes/Oracoes";
import QuemSomos from "@/components/QuemSomos/QuemSomos";
import Submenu from "@/components/Submenu/Submenu";
import TopMain from "@/components/TopArea/TopMain";

export default function Home() {
  return (
    <>
      <Submenu />
      <main className="mx-4 flex max-w-[70rem] flex-col items-center justify-center">
        <CoverMain />
        <CoverSecondary />
        <div className="my-7 h-4 w-full bg-gray-200"></div>
        <TopMain />
        <Oracoes />
        <BannerApoie />
        <QuemSomos />
      </main>
    </>
  );
}
