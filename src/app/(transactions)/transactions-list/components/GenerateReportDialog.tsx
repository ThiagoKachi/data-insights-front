import { Button } from "@/components/Button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/Dialog"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"

interface GenerateReportDialogProps {
  isReportDialogOpen: boolean
  setIsReportDialogOpen: (open: boolean) => void
}

export function GenerateReportDialog({
  isReportDialogOpen,
  setIsReportDialogOpen
}: GenerateReportDialogProps) {
  return (
    <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
      <DialogTrigger asChild>
        <Button>Gerar Relatório</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Gerar Relatório</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="from">Data Inicial</Label>
              <Input id="from" type="date" />
            </div>
            <div>
              <Label htmlFor="to">Data Final</Label>
              <Input id="to" type="date" />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsReportDialogOpen(false)}>Cancelar</Button>
            <Button>Gerar</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}