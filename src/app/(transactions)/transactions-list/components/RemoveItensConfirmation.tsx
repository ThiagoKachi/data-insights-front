import { Button } from "@/components/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";

interface RemoveItensConfirmationProps {
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: (open: boolean) => void;
  handleDeleteSelected: () => Promise<void>;
  disabled?: boolean;
}

export function RemoveItensConfirmation({
  isDeleteDialogOpen,
  setIsDeleteDialogOpen,
  handleDeleteSelected,
  disabled,
}: RemoveItensConfirmationProps) {
  return (
    <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
      <DialogTrigger asChild disabled={disabled}>
        <Button variant="destructive">Excluir</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar exclusão</DialogTitle>
        </DialogHeader>
        <p>Tem certeza que deseja excluir os itens selecionados?</p>
        <div className="flex justify-end space-x-2 mt-4">
          <Button
            variant="outline"
            onClick={() => setIsDeleteDialogOpen(false)}
          >
            Cancelar
          </Button>
          <Button variant="destructive" onClick={handleDeleteSelected}>
            Confirmar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
