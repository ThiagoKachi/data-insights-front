import { Button } from "@/components/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import { Input } from "@/components/Input";
import { createTransactions } from "@/utils/actions/createTransactions";
import { Upload } from "lucide-react";
import { useState } from "react";

interface UploadDialogProps {
  isUploadDialogOpen: boolean;
  setIsUploadDialogOpen: (open: boolean) => void;
  disabled?: boolean;
}

export function UploadDialog({
  isUploadDialogOpen,
  setIsUploadDialogOpen,
  disabled,
}: UploadDialogProps) {
  const [file, setFile] = useState<File | null>(null);

  async function handleUploadTransactions() {
    try {
      if (!file) {
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      setIsUploadDialogOpen(false);
      setFile(null);

      await createTransactions(formData);
    } catch {
      console.log("Erro ao fazer upload");
    }
  }

  return (
    <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
      <DialogTrigger asChild disabled={disabled}>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload de Arquivo</DialogTitle>
        </DialogHeader>
        <Input
          type="file"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              setFile(selectedFile);
            }
          }}
          disabled={disabled}
        />
        <div className="flex justify-end space-x-2 mt-4">
          <Button
            variant="outline"
            onClick={() => setIsUploadDialogOpen(false)}
          >
            Cancelar
          </Button>
          <Button onClick={handleUploadTransactions}>Fazer Upload</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
