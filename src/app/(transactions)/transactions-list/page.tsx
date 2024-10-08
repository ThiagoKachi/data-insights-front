"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/Pagination";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CalendarInterval } from "./components/CalendarInterval";
import { GenerateReportDialog } from "./components/GenerateReportDialog";
import { RemoveItensConfirmation } from "./components/RemoveItensConfirmation";
import { TransactionsTable } from "./components/Table";
import { UploadDialog } from "./components/UploadDialog";
import { data } from "./data";

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
  const [items, setItems] = useState<Item[]>(data);
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: undefined, to: undefined });
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);

  const handleDeleteSelected = () => {
    setItems(items.filter((item) => !selectedItems.includes(item.id)));
    setSelectedItems([]);
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="container mx-auto p-8 border rounded-md my-[2%] bg-white">
      <div className="flex items-center gap-2 mb-4 text-zinc-700">
        <Link href="/dashboard" className="text-sm font-medium">
          <ArrowBigLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold">Listagem de Itens</h1>
      </div>
      <div className="flex justify-between items-end mb-4">
        <CalendarInterval dateRange={dateRange} setDateRange={setDateRange} />
        <div className="space-x-2 flex items-center">
          {selectedItems.length > 0 && (
            <RemoveItensConfirmation
              isDeleteDialogOpen={isDeleteDialogOpen}
              setIsDeleteDialogOpen={setIsDeleteDialogOpen}
              handleDeleteSelected={handleDeleteSelected}
            />
          )}

          <UploadDialog
            isUploadDialogOpen={isUploadDialogOpen}
            setIsUploadDialogOpen={setIsUploadDialogOpen}
          />

          <GenerateReportDialog
            isReportDialogOpen={isReportDialogOpen}
            setIsReportDialogOpen={setIsReportDialogOpen}
          />
        </div>
      </div>

      <TransactionsTable
        items={items}
        setItems={setItems}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />

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
