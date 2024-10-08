import { Button } from "@/components/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Edit } from "lucide-react";
import { Item } from "../page";

interface EditTransactionDialogProps {
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (open: boolean) => void;
  item: Item;
  handleEdit: (item: Item) => void;
  editingItem: Item | null;
  handleSaveEdit: (editedItem: Item) => void;
}

export function EditTransactionDialog({
  isEditDialogOpen,
  setIsEditDialogOpen,
  item,
  handleEdit,
  editingItem,
  handleSaveEdit,
}: EditTransactionDialogProps) {
  return (
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" onClick={() => handleEdit(item)}>
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar any</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" defaultValue={editingItem?.nome} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue={editingItem?.email} />
            </div>
            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" defaultValue={editingItem?.telefone} />
            </div>
            <div>
              <Label htmlFor="endereco">Endereço</Label>
              <Input id="endereco" defaultValue={editingItem?.endereco} />
            </div>
            <div>
              <Label htmlFor="cidade">Cidade</Label>
              <Input id="cidade" defaultValue={editingItem?.cidade} />
            </div>
            <div>
              <Label htmlFor="estado">Estado</Label>
              <Input id="estado" defaultValue={editingItem?.estado} />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button onClick={() => editingItem && handleSaveEdit(editingItem)}>
              Salvar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
