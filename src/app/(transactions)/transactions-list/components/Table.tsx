import { ITransaction } from "@/@types/Transaction";
import { Badge } from "@/components/Badge";
import { Checkbox } from "@/components/Checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import { cn } from "@/lib/utils";
import { decodePaymentMethod } from "@/utils/decodePaymentMethod";
import { formatCurrency } from "@/utils/formatCurrenct";
import { formatDate } from "@/utils/formatDate";
import { useState } from "react";
import { EditTransactionDialog } from "./EditTransactionDialog";

interface TableProps {
  items: ITransaction[];
  setItems: (items: ITransaction[]) => void;
  selectedItems: string[];
  setSelectedItems: (selectedItems: string[]) => void;
}

export function TransactionsTable({
  items,
  setItems,
  selectedItems,
  setSelectedItems,
}: TableProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ITransaction | null>(null);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(items.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    }
  };

  const handleEdit = (item: ITransaction) => {
    setEditingItem(item);
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = (editedItem: ITransaction) => {
    setItems(
      items.map((item) => (item.id === editedItem.id ? editedItem : item)),
    );
    setEditingItem(null);
    setIsEditDialogOpen(false);
  };

  return (
    <>
      <Table className="border mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <Checkbox
                checked={selectedItems.length === items.length}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Taxas</TableHead>
            <TableHead>Método de Pagamento</TableHead>
            <TableHead>Responsável</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Checkbox
                  checked={selectedItems.includes(item.id)}
                  onCheckedChange={(checked) =>
                    handleSelectItem(item.id, checked as boolean)
                  }
                />
              </TableCell>
              <TableCell>{item.entity}</TableCell>
              <TableCell
                className={cn(
                  "font-semibold",
                  item.type === "income" ? "text-green-500" : "text-red-500",
                )}
              >
                {item.type === "income" ? "Receita" : "Despesa"}
              </TableCell>
              <TableCell className="">
                <Badge
                  className="text-xs"
                  variant={
                    item.status === "paid"
                      ? "paid"
                      : item.status === "canceled"
                        ? "canceled"
                        : "pending"
                  }
                >
                  {item.status === "paid"
                    ? "Pago"
                    : item.status === "canceled"
                      ? "Cancelado"
                      : "Pendente"}
                </Badge>
              </TableCell>
              <TableCell>{formatDate(item.transaction_date)}</TableCell>
              <TableCell>{formatCurrency(item.value)}</TableCell>
              <TableCell>{formatCurrency(item.taxes)}</TableCell>
              <TableCell>{decodePaymentMethod(item.payment_method)}</TableCell>
              <TableCell>{item.responsible}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <EditTransactionDialog
                    isEditDialogOpen={isEditDialogOpen}
                    setIsEditDialogOpen={setIsEditDialogOpen}
                    item={item}
                    handleEdit={handleEdit}
                    editingItem={editingItem}
                    handleSaveEdit={handleSaveEdit}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
