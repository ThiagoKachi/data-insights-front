"use client";

import { IFiles } from "@/@types/Files";
import { IPagination } from "@/@types/Pagination";
import { PaginationComponent } from "@/components/PaginationComponent";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import { fetchTransactionsFiles } from "@/utils/actions/getFileTransactions";
import { formatDate } from "@/utils/formatDate";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function TransactionsFilesList() {
  const [data, setData] = useState<IFiles[]>([]);
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);

  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || 1;

  const fetchData = useCallback(async (page: number | null) => {
    const { data, pagination } = await fetchTransactionsFiles(page as number);

    setData(data);
    setPagination(pagination);
  }, []);

  useEffect(() => {
    fetchData(currentPage as number);
  }, [fetchData, currentPage]);

  const handleButtonClick = async (page: number | null) => {
    if (page) {
      const params = new URLSearchParams(window.location.search);
      params.set("page", page.toString());
      window.history.pushState({}, "", `${window.location.pathname}?${params}`);

      fetchData(page);
    }
  };

  return (
    <div className="mx-8 p-8 border rounded-md my-[2%] bg-white">
      <div className="flex items-center gap-2 mb-4 text-zinc-700">
        <Link href="/dashboard" className="text-sm font-medium">
          <ArrowBigLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold">Listagem de arquivos carregados</h1>
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Usuário</TableHead>
            <TableHead className="w-[150px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((file) => (
            <TableRow key={file.id}>
              <TableCell>{file.file_name}</TableCell>
              <TableCell>{file.transactions_quantity}</TableCell>
              <TableCell>{formatDate(file.created_at)}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  {file.name}
                  <span className="text-xs font-medium text-zinc-500">
                    {file.email}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Link
                  href={`/transactions-list/1`}
                  className="text-blue-600 hover:underline"
                >
                  Ver detalhes
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PaginationComponent
        currentPage={Number(currentPage)}
        handleButtonClick={handleButtonClick}
        pagination={pagination}
      />
    </div>
  );
}
