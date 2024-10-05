import { Button } from "@/components/Button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/Dialog"
import { Input } from "@/components/Input"
import { Upload } from "lucide-react"

interface UploadDialogProps {
  isUploadDialogOpen: boolean
  setIsUploadDialogOpen: (open: boolean) => void
}

export function UploadDialog({
  isUploadDialogOpen,
  setIsUploadDialogOpen
}: UploadDialogProps) {
  return (
    <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
      <DialogTrigger asChild>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload de Arquivo</DialogTitle>
        </DialogHeader>
        <Input type="file" />
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)}>Cancelar</Button>
          <Button>Fazer Upload</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}