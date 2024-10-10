import { ITransaction } from "@/@types/Transaction";
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

interface EditTransactionDialogProps {
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (open: boolean) => void;
  item: ITransaction;
  handleEdit: (item: ITransaction) => void;
  editingItem: ITransaction | null;
  handleSaveEdit: (editedItem: ITransaction) => void;
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
          <DialogTitle>Editar transação</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nome">Responsável</Label>
              <Input id="nome" defaultValue={editingItem?.entity} />
            </div>
            <div>
              <Label htmlFor="email">Método de Pagamento</Label>
              <Input id="email" defaultValue={editingItem?.value} />
            </div>
            <div>
              <Label htmlFor="telefone">Valor</Label>
              <Input id="telefone" defaultValue={editingItem?.value} />
            </div>
            <div>
              <Label htmlFor="endereco">Taxas</Label>
              <Input id="endereco" defaultValue={editingItem?.taxes} />
            </div>
            <div>
              <Label htmlFor="cidade">Status</Label>
              <Input id="cidade" defaultValue={editingItem?.status} />
            </div>
            <div>
              <Label htmlFor="estado">Tipo</Label>
              <Input id="estado" defaultValue={editingItem?.type} />
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
