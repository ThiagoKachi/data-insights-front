"use client";

import { IPagination } from "@/@types/Pagination";
import { ITransaction } from "@/@types/Transaction";
import { PaginationComponent } from "@/components/PaginationComponent";
import { deleteTransactions } from "@/utils/actions/deleteTransactions";
import { fetchTransactions } from "@/utils/actions/getTransactions";
import { formatDate } from "@/utils/formatDate";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { CalendarInterval } from "./components/CalendarInterval";
import { GenerateReportDialog } from "./components/GenerateReportDialog";
import { RemoveItensConfirmation } from "./components/RemoveItensConfirmation";
import { TransactionsTable } from "./components/Table";
import { UploadDialog } from "./components/UploadDialog";

export interface Item {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
}

export default function TransactionsList() {
  const [data, setData] = useState<ITransaction[]>([]);
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);

  const [dateRange, setDateRange] = useState<{
    from: Date | null;
    to: Date | null;
  }>({ from: null, to: null });
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);

  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || 1;

  const fetchData = useCallback(
    async (page: number | null) => {
      const { data, pagination } = await fetchTransactions(
        page as number,
        dateRange?.from ? formatDate(dateRange?.from) : undefined,
        dateRange?.to ? formatDate(dateRange?.to) : undefined,
      );

      setData(data);
      setPagination(pagination);
    },
    [dateRange?.from, dateRange?.to],
  );

  useEffect(() => {
    fetchData(currentPage as number);
  }, [fetchData, currentPage]);

  async function handleDeleteSelected() {
    try {
      setIsLoading(true);
      const updatedData = data.filter(
        (item) => !selectedItems.includes(item.id),
      );
      setData(updatedData);
      setSelectedItems([]);
      setIsDeleteDialogOpen(false);
      await deleteTransactions(selectedItems);
    } catch {
      setIsDeleteDialogOpen(false);
    } finally {
      setIsLoading(false);
    }
  }

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
        <h1 className="text-2xl font-bold">Listagem de Itens</h1>
      </div>
      <div className="flex justify-between items-end mb-4">
        <CalendarInterval
          dateRange={dateRange}
          setDateRange={setDateRange}
          disabled={isLoading}
        />
        <div className="space-x-2 flex items-center">
          {selectedItems.length > 0 && (
            <RemoveItensConfirmation
              isDeleteDialogOpen={isDeleteDialogOpen}
              setIsDeleteDialogOpen={setIsDeleteDialogOpen}
              handleDeleteSelected={handleDeleteSelected}
              disabled={isLoading}
            />
          )}

          <UploadDialog
            isUploadDialogOpen={isUploadDialogOpen}
            setIsUploadDialogOpen={setIsUploadDialogOpen}
            disabled={isLoading}
          />

          <GenerateReportDialog
            isReportDialogOpen={isReportDialogOpen}
            setIsReportDialogOpen={setIsReportDialogOpen}
            disabled={isLoading}
          />
        </div>
      </div>

      <TransactionsTable
        items={data}
        setItems={setData}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />

      <PaginationComponent
        currentPage={Number(currentPage)}
        handleButtonClick={handleButtonClick}
        pagination={pagination}
      />
    </div>
  );
}
