import BannerFiltro from "@/components/BannerFiltro/page";
import ListaDeMusicasFiltradas from "@/components/ListaDeMusicas/ListaDeMusicasFiltradas";
import capa from "@/public/images/cover-missa-momentos/entrada.jpg";

// http://localhost:3000/comunhao
const FiltroParteDaMissa = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <BannerFiltro titulo="Cantos de entrada" image={capa} />
      <ListaDeMusicasFiltradas />
    </div>
  );
};

export default FiltroParteDaMissa;
