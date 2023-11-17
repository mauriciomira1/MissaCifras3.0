import MusicaTop from "./MusicaTop";

const TopAcessadas = () => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <h1 className="font-highlight font-bold uppercase text-4xl text-primaryColor mb-4">
        Mais acessadas
      </h1>
      <div className="flex flex-wrap gap-1">
        <div className="flex flex-col">
          <MusicaTop
            MusicNumber={1}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
          <MusicaTop
            MusicNumber={2}
            MusicName="Ninguém te ama como eu"
            MusicAuthor="Eugênio Jorge"
          />
          <MusicaTop
            MusicNumber={3}
            MusicName="Qual é a chave"
            MusicAuthor="Adriana Arydes"
          />
          <MusicaTop
            MusicNumber={4}
            MusicName="Amigos pela fé"
            MusicAuthor="Anjos de Resgate"
          />
          <MusicaTop
            MusicNumber={5}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
        </div>
        <div>
          <MusicaTop
            MusicNumber={6}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
          <MusicaTop
            MusicNumber={7}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
          <MusicaTop
            MusicNumber={8}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
          <MusicaTop
            MusicNumber={9}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
          <MusicaTop
            MusicNumber={10}
            MusicName="Belo Lar"
            MusicAuthor="Gui Teles"
          />
        </div>
      </div>
    </div>
  );
};

export default TopAcessadas;
