import { prismaClient } from "@/lib/prisma";

const Playlists = async () => {
  const lista = await prismaClient.artista.findMany({
    orderBy: {
      nome: "asc",
    },
  });

  return (
    <div>
      {lista.map((item) => (
        <p key={item.id}>{item.nome}</p>
      ))}
    </div>
  );
};

export default Playlists;
