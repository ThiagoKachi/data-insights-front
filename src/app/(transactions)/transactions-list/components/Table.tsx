import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/Dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Item } from "../page";
import { EditTransactionDialog } from "./EditTransactionDialog";

interface TableProps {
  items: Item[];
  setItems: (items: Item[]) => void;
  selectedItems: number[];
  setSelectedItems: (selectedItems: number[]) => void;
}

export function TransactionsTable({
  items,
  setItems,
  selectedItems,
  setSelectedItems,
}: TableProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteItemDialogOpen, setIsDeleteItemDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [deletingItem, setDeletingItem] = useState<Item | null>(null);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(items.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    }
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = (editedItem: Item) => {
    setItems(
      items.map((item) => (item.id === editedItem.id ? editedItem : item))
    );
    setEditingItem(null);
    setIsEditDialogOpen(false);
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
    setDeletingItem(null);
    setIsDeleteItemDialogOpen(false);
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
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Endereço</TableHead>
            <TableHead>Cidade</TableHead>
            <TableHead>Estado</TableHead>
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
              <TableCell>{item.nome}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.telefone}</TableCell>
              <TableCell>{item.endereco}</TableCell>
              <TableCell>{item.cidade}</TableCell>
              <TableCell>{item.estado}</TableCell>
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

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsDeleteItemDialogOpen(true)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog
        open={isDeleteItemDialogOpen}
        onOpenChange={setIsDeleteItemDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar exclusão</DialogTitle>
          </DialogHeader>
          <p>Tem certeza que deseja excluir o item {deletingItem?.nome}?</p>
          <div className="flex justify-end space-x-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setIsDeleteItemDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="destructive"
              onClick={() => deletingItem && handleDelete(deletingItem.id)}
            >
              Confirmar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
