import { ArtistaProps } from "@/dtos/artistaProps";
import { SongProps } from "@/dtos/songProps";
import { UserProps } from "@/dtos/userProps";
import { prismaClient } from "@/lib/prisma";

const prisma = prismaClient;

async function main() {
  try {
    /*     const artistas: ArtistaProps[] = [
      {
        nome: "Eugênio Jorge",
        qtdDeCliques: 155,
        capa: "https://ciframelodica.com.br/img/squares/100/eugenio_jorge.jpg",
      },
      {
        nome: "Nelsinho Corrêa",
        qtdDeCliques: 66,
        capa: "https://akamai.sscdn.co/uploadfile/letras/fotos/f/5/6/b/f56ba0e074fa723b436b78cf776b99be-tb_160.jpg",
      },
    ];

    await prisma.artista.createMany({
      data: artistas,
    }); */

    /*     const users: UserProps[] = [
      {
        nome: "Maurício Miranda",
        email: "mauricio@email.com",
        foto: "https://github.com/mauriciomira1.png",
      },
    ];

    await prisma.user.createMany({
      data: users,
    }); */

    const cifras: SongProps[] = [
      {
        musica: "Sacramento da Comunhão",
        slug: "sacramento-da-comunhao",
        versao: "Original",
        compositor: "Nelsinho Corrêa",
        artistaId: "clqd5a3dx0001jhr7fm4o9g5x",
        classificacao: "Comunhão",
        acordes: ["D", "A/C#", "Bm", "G", "Em", "A"],
        cifra:
          "[Intro] C  G  C\n        G  C  D\n\n[Primeira Parte]\n\n    G              D\nSenhor, quando te vejo\n         Em\nNo sacramento da comunhão\n C                D4  D\nSinto o céu se abrir\n       G       G/B  C9\nE uma luz a me atingir\n     Am7               G/B\nEsfriando minha cabeça\n         C9              D4  D\nE esquentando o meu coração\n\n    G                  D\nSenhor, graças e louvores\n       Em\nSejam dados a todo momento!\n  C                 D4  D\nQuero te louvar na dor\n        G        G/B  C9\nNa alegria e no sofrimento\n         Am            D\nE se em meio à tribulação\n      G     G/B    C9\nEu me esquecer de Ti\n    Am                      D4  D\nIlumina minhas trevas com Tua  luz\n\n[Refrão]\n\n   G   D                 Em\nJesus,   fonte de misericórdia\n\nQue jorra do templo\n   Am     G/B       D4   D\nJesus, o filho da rainha!\n   Bm  C°  Em7     Em7M    C\nJesus,    rosto divino do homem\n   G    C9      D    G       Em  D/F#\nJesus, rosto humano de Deus!\n\n   G   D                 Em\nJesus,   fonte de misericórdia\n\nQue jorra do templo\n   Am     G/B       D4   D\nJesus, o filho da rainha!\n   Bm  C°  Em7     Em7M    C\nJesus,    rosto divino do homem\n   G    C9      D    G\nJesus, rosto humano de Deus!\n\n[Segunda Parte]\n\n  C9\nChego muitas vezes\n        D\nEm Tua casa meu Senhor\n  Bm                   Em           D\nTriste, abatido, precisando de amor\n       C9              G/B\nMas depois da comunhão\n     Am                G/B\nTua casa é meu coração\n       C9                     D4  D\nEntão sinto o céu, dentro de mim!\n\n[Pré-Refrão]\n\n       C9\nNão comungo porque mereço\n          D11\nDisso eu sei, ó meu Senhor\n   Bm                     E  E/G#\nComungo, pois preciso de Ti\n  Am                  C/G\nQuando faltei à missa\n      F                 G\nEu fugia de mim e de Ti\n      Am         G/B  C9\nMas agora eu voltei\n             D4    Em7  D/F#\nPor favor, aceita-me\n\n[Refrão]\n\n   G   D                 Em\nJesus,   fonte de misericórdia\n\nQue jorra do templo\n   Am     G/B       D4   D\nJesus, o filho da rainha!\n   Bm  C°  Em7     Em7M    C\nJesus,    rosto divino do homem\n   G    C9      D    G       Em  D/F#\nJesus, rosto humano de Deus!\n\n   G   D                 Em\nJesus,   fonte de misericórdia\n\nQue jorra do templo\n   Am     G/B       D4   D\nJesus, o filho da rainha!\n   Bm  C°  Em7     Em7M    C\nJesus,    rosto divino do homem\n   G    C           G     C\nJesus, rosto humano   de Deus!\n\n[Final] G  C  G\n",
        letra:
          "Senhor, quando te vejo\nNo sacramento da comunhão\nSinto o céu se abrir\nE uma luz a me atingir\nEsfriando minha cabeça\nE esquentando o meu coração\n\nSenhor, graças e louvores\nSejam dados a todo momento!\nQuero te louvar na dor\nNa alegria e no sofrimento\nE se em meio à tribulação\nEu me esquecer de Ti\nIlumina minhas trevas com Tua luz\n\nJesus, fonte de misericórdia\nQue jorra do templo\nJesus, o filho da rainha!\nJesus, rosto divino do homem\nJesus, rosto humano de Deus!\n\nJesus, fonte de misericórdia\nQue jorra do templo\nJesus, o filho da rainha!\nJesus, rosto divino do homem\nJesus, rosto humano de Deus!\n\nChego muitas vezes\nEm Tua casa meu Senhor\nTriste, abatido, precisando de amor\nMas depois da comunhão\nTua casa é meu coração\nEntão sinto o céu, dentro de mim!\n\nNão comungo porque mereço\nDisso eu sei, ó meu Senhor\nComungo, pois preciso de Ti\nQuando faltei à missa\nEu fugia de mim e de Ti\nMas agora eu voltei\nPor favor, aceita-me\n\nJesus, fonte de misericórdia\nQue jorra do templo\nJesus, o filho da rainha!\nJesus, rosto divino do homem\nJesus, rosto humano de Deus!\n\nJesus, fonte de misericórdia\nQue jorra do templo\nJesus, o filho da rainha!\nJesus, rosto divino do homem\nJesus, rosto humano de Deus!\n",
        userId: "clqejqw7u0000qcji4r7ximyq",
        qtdDeCliques: 108,
        tom: "D",
        bpm: 138,
        video: "https://www.youtube.com/watch?v=N59wH5cpDjU",
        participacao: [
          "Ana Lúcia",
          "Dalvimar Gallo",
          "Eugênio Jorge",
          "Ziza Fernandes",
        ],
        hashtags: ["hóstia", "comunhão", "corpo"],
        liturgica: true,
      },
      {
        musica: "Só por ti Jesus",
        slug: "so-por-ti-jesus",
        versao: "Original",
        compositor: "Eugênio Jorge",
        artistaId: "clqd5a3dx0000jhr7u10lhvg3",
        classificacao: "Pós Comunhão",
        acordes: ["G", "Em", "C", "D"],
        cifra:
          "[Intro]  Emaj7  F#m/E  Emaj7  F#m/E  B/C#  C#m  B\n\n  C#m Amaj7 F#m7 Amaj7/B\n\n     E7+   F#m/E             B/C#   C#m\nSó por Ti, Jesus, quero me consumir,\n             A7+              F#m7            \nComo vela que queima no altar, me consumir de \n    A/B\namor.\n  E7+      F#m/E             B/C#  C#m\nSó em Ti, Jesus, quero me derramar,\n                A7+      A/B             \nComo o rio se entrega ao mar, me derramar de \nEmaj7 F#m/E\namor.\n     E7+   F#m/E             B/C#   C#m\nSó por Ti, Jesus, quero me consumir,\n             A7+              F#m7            \nComo vela que queima no altar, me consumir de \n    A/B\namor.\n  E7+      F#m/E             B/C#  C#m\nSó em Ti, Jesus, quero me derramar,\n                A7+      A/B             \nComo o rio se entrega ao mar, me derramar de \nEmaj7 F#m/E\namor.\n\n   A7+               B/A\nPois Tu és o meu amparo, o meu refúgio,\n                   C#m (B/C# C#m)\nés alegria de minh'alma.\n A7+               B/A        G#m7\nSó em Ti repousa a minha esperança, não \nvacilarei,\n        C#m7          F#m7       D A/C#  A/B\ne mesmo na dor, quero seguir até o fim.\n   E7+   E6                E7+  E6\n     E7+   F#m/E             B/C#   C#m\nSó por Ti, Jesus, quero me consumir,\n             A7+              F#m7            \nComo vela que queima no altar, me consumir de \n    A/B\namor.\n  E7+      F#m/E             B/C#  C#m\nSó em Ti, Jesus, quero me derramar,\n                A7+      A/B             \nComo o rio se entrega ao mar, me derramar de \nEmaj7 F#m/E\namor.\n     E7+   F#m/E             B/C#   C#m\nSó por Ti, Jesus, quero me consumir,\n             A7+              F#m7            \nComo vela que queima no altar, me consumir de \n    A/B\namor.\n  E7+      F#m/E             B/C#  C#m\nSó em Ti, Jesus, quero me derramar,\n                A7+      A/B             \nComo o rio se entrega ao mar, me derramar de \nEmaj7 F#m/E\namor.",
        letra:
          "Só por Ti, Jesus, quero me consumir,\nComo vela que queima no altar, me consumir de \namor.\nSó em Ti, Jesus, quero me derramar,\nComo o rio se entrega ao mar, me derramar de \namor.\nSó por Ti, Jesus, quero me consumir,\nComo vela que queima no altar, me consumir de \namor.\nSó em Ti, Jesus, quero me derramar,\nComo o rio se entrega ao mar, me derramar de \namor.\nPois Tu és o meu amparo, o meu refúgio,\nés alegria de minh'alma.\nSó em Ti repousa a minha esperança, não \nvacilarei,\ne mesmo na dor, quero seguir até o fim.\nSó por Ti, Jesus, quero me consumir,\nComo vela que queima no altar, me consumir de \namor.\nSó em Ti, Jesus, quero me derramar,\nComo o rio se entrega ao mar, me derramar de \namor.\nSó por Ti, Jesus, quero me consumir,\nComo vela que queima no altar, me consumir de \namor.\nSó em Ti, Jesus, quero me derramar,\nComo o rio se entrega ao mar, me derramar de \namor.",
        userId: "clqejqw7u0000qcji4r7ximyq",
        qtdDeCliques: 61,
        tom: "G",
        bpm: 120,
        video: "https://www.youtube.com/watch?v=xsOt3EdiMSU",
        participacao: [],
        hashtags: ["jesus", "amor", "adoração"],
        liturgica: true,
      },
    ];

    await prisma.cifra.createMany({
      data: cifras,
    });

    console.log("Seed criado com sucesso!");
  } catch (error) {
    console.log("Erro ao semear o banco de dados:", error);
  } finally {
    prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
