import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/Pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

async function fetchProducts() {
  // Simula um atraso de 5 segundos
  await new Promise((resolve) => setTimeout(resolve, 500));
  return ["Product 1", "Product 2", "Product 3"];
}

export default async function TransactionsFilesList() {
  const products = await fetchProducts();
  console.log(products);

  const dados = [
    {
      id: 1,
      nome: "Item 1",
      categoria: "A",
      preco: 10.99,
      estoque: 100,
      avaliacao: 4.5,
      status: "Ativo",
    },
    {
      id: 2,
      nome: "Item 2",
      categoria: "B",
      preco: 15.99,
      estoque: 50,
      avaliacao: 3.8,
      status: "Inativo",
    },
    {
      id: 3,
      nome: "Item 3",
      categoria: "A",
      preco: 8.99,
      estoque: 75,
      avaliacao: 4.2,
      status: "Ativo",
    },
    {
      id: 4,
      nome: "Item 4",
      categoria: "C",
      preco: 12.99,
      estoque: 25,
      avaliacao: 4.0,
      status: "Ativo",
    },
    {
      id: 5,
      nome: "Item 5",
      categoria: "B",
      preco: 9.99,
      estoque: 60,
      avaliacao: 3.5,
      status: "Inativo",
    },
  ];

  return (
    <div className="container mx-auto p-8 border rounded-md my-[2%] bg-white">
      <div className="flex items-center gap-2 mb-4 text-zinc-700">
        <Link href="/dashboard" className="text-sm font-medium">
          <ArrowBigLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold">Listagem de arquivos carregados</h1>
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Link</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Estoque</TableHead>
            <TableHead>Avaliação</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dados.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Link
                  href={`/item/${item.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Ver detalhes
                </Link>
              </TableCell>
              <TableCell>{item.nome}</TableCell>
              <TableCell>{item.categoria}</TableCell>
              <TableCell>R$ {item.preco.toFixed(2)}</TableCell>
              <TableCell>{item.estoque}</TableCell>
              <TableCell>{item.avaliacao.toFixed(1)}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-2 text-zinc-600">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
