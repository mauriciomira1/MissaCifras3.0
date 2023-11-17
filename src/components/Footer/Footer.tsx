import Link from "next/link";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <div className="font-text h-36 md:h-48 bg-gray-950 flex flex-col items-center justify-between">
      <div className="flex h-28">
        <FooterItem href="/quem-somos" name="Quem somos" />
        <FooterItem href="/fale-conosco" name="Fale conosco" />
        <FooterItem href="/colabore" name="Quero ajudar" />
      </div>
      <div className="w-full flex mt-2 items-start p-4">
        <p className="text-[.7rem] sm:text-xs text-gray-400">
          2023® - O seu site de cifras católicas
          <br />
          Evangelizando através da música
        </p>
      </div>
    </div>
  );
};

export default Footer;
