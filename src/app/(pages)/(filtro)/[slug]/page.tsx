import BannerFiltro from "@/components/BannerFiltro/page";

// http://localhost:3000/comunhao
const FiltroParteDaMissa = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <BannerFiltro />
    </div>
  );
};

export default FiltroParteDaMissa;
