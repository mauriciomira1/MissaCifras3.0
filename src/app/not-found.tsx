import Image from "next/image";
import Link from "next/link";
import bg404 from "../public/images/not-found/404-bg.jpg";

const NotFound = () => {
  return (
    <div className="min-w-screen md:min-h-screen flex flex-wrap items-center justify-center py-24">
      <div className="flex flex-col items-center md:justify-center">
        <Image
          src={bg404}
          alt="Erro 404"
          width={600}
          className="w-72 sm:w-96 md:max-w-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold flex flex-col items-center">
          <span className="text-5xl md:text-8xl text-tertiary">Oops,</span>
          <br />
          Acho que você se perdeu.
        </h1>
        <p className="text-center text-sm mx-6">
          Clique no botão abaixo para ser redirecionado para a Página Inicial
        </p>
        <Link
          href="/"
          className="bg-secondaryColor px-3 py-2 rounded font-text font-bold text-white m-4 hover:opacity-90"
        >
          Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
