import { Input } from "../shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcn/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../shadcn/ui/table";

const ListaDeMusicasFiltradas = () => {
  const musicas = [
    {
      musica: "Manda teus anjos",
      artista: "Anjos de Resgate",
    },
    {
      musica: "Sem você",
      artista: "Rosa de Saron",
    },
    {
      musica: "Só por Ti Jesus",
      artista: "Eugênio Jorge",
    },
  ];

  return (
    <Table className="mb-12">
      <TableHeader>
        <TableRow className="rounded-lg bg-gray-200">
          <TableHead className="font-text text-base font-bold text-black">
            Música
          </TableHead>
          <TableHead className="font-text text-base font-bold text-black">
            Artista
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow className="flex h-16 items-center gap-6">
          <Select>
            <SelectTrigger className="w-52">
              <SelectValue
                placeholder="Período litúrgico"
                className="font-medium text-black placeholder:font-text"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="pascoa"
                className="font-text font-medium text-black"
              >
                Páscoa
              </SelectItem>
              <SelectItem
                value="advento"
                className="font-text font-medium text-black"
              >
                Advento
              </SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            placeholder="Palavras-chave (separadas por vírgula)"
            className="placeholder:text-gray-400"
          />
        </TableRow>
        {musicas.map((musica) => (
          <TableRow
            className="my-0 py-0 font-text text-black active:bg-gray-100 active:text-secondaryColor"
            key={musica.musica}
          >
            <TableCell className="font-bold">{musica.musica}</TableCell>
            <TableCell>{musica.artista}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListaDeMusicasFiltradas;
