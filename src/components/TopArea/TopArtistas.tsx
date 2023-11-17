import ArtistaTop from "./ArtistaTop";
import MusicaTop from "./MusicaTop";
import Artist01 from "../../public/images/artists/missionario-shalom.jpg";

const TopArtistas = () => {
  return (
    <div className="flex flex-col items-center md:items-end">
      <h1 className="text-right font-highlight font-bold uppercase text-4xl text-primaryColor mb-4">
        TOP ARTISTAS
      </h1>
      <div>
        <ArtistaTop
          idAuthor="top-artista-1"
          Author="Missionário shalom"
          MusicName="Eis me aqui"
          MusicNumber={1}
          Photo={Artist01}
        />
        <ArtistaTop
          idAuthor="top-artista-2"
          Author="Eugênio Jorge"
          MusicName="Ninguém te ama como eu"
          MusicNumber={2}
          Photo={Artist01}
        />
        <ArtistaTop
          idAuthor="top-artista-3"
          Author="Rosa de Saron"
          MusicName="Mire as estrelas"
          MusicNumber={3}
          Photo={Artist01}
        />
        <ArtistaTop
          idAuthor="top-artista-4"
          Author="Comunidade shalom"
          MusicName="Belíssimo Esposo"
          MusicNumber={4}
          Photo={Artist01}
        />
        <ArtistaTop
          idAuthor="top-artista-5"
          Author="Gui Teles"
          MusicName="Belo Lar"
          MusicNumber={5}
          Photo={Artist01}
        />
      </div>
    </div>
  );
};

export default TopArtistas;
