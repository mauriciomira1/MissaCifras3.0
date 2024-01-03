import { prismaClient } from "@/lib/prisma";

import EnviarCifraComponent from "@/components/Dashboard/EnviarCifra/EnviarCifraComponent";
import { EnviarCifraContext } from "@/providers/enviarcifra";

const EnviarCifra = async () => {
  return <EnviarCifraComponent />;
};

export default EnviarCifra;
