interface CifraProps {
  cifraELetra: string;
}

const Cifra = ({ cifraELetra }: CifraProps) => {
  return <pre className="font-cifra">{cifraELetra}</pre>;
};

export default Cifra;
