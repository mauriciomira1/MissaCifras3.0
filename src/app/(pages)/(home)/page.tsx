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
      <main className="flex max-w-[70rem] flex-col items-center justify-center mx-4">
        <CoverMain />
        <CoverSecondary />
        <div className="h-4 w-full my-7 bg-gray-200"></div>
        <TopMain />
        <Oracoes />
        <BannerApoie />
        <QuemSomos />
      </main>
    </>
  );
}
