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
import { generateTransactionsReport } from "@/utils/actions/generateTransactionsReport";
import { format } from "date-fns";
import { useState } from "react";

interface GenerateReportDialogProps {
  isReportDialogOpen: boolean;
  setIsReportDialogOpen: (open: boolean) => void;
  disabled?: boolean;
}

export function GenerateReportDialog({
  isReportDialogOpen,
  setIsReportDialogOpen,
  disabled,
}: GenerateReportDialogProps) {
  const [dateRange, setDateRange] = useState<{ from: string; to: string }>({
    from: "",
    to: "",
  });

  async function handleGenerateReport() {
    try {
      const dateFormated = {
        initialPeriod: format(dateRange.from, "dd/MM/yyyy"),
        finalPeriod: format(dateRange.to, "dd/MM/yyyy"),
      };

      setDateRange({ from: "", to: "" });
      setIsReportDialogOpen(false);

      await generateTransactionsReport({
        finalPeriod: dateFormated.finalPeriod,
        initialPeriod: dateFormated.initialPeriod,
      });
    } catch (error) {
      console.log(error);
    }
  }

  console.log(dateRange);

  return (
    <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
      <DialogTrigger asChild disabled={disabled}>
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
              <Input
                id="from"
                type="date"
                value={dateRange.from}
                onChange={(e) =>
                  setDateRange({ ...dateRange, from: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="to">Data Final</Label>
              <Input
                id="to"
                type="date"
                value={dateRange.to}
                onChange={(e) =>
                  setDateRange({ ...dateRange, to: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              onClick={() => setIsReportDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              disabled={!dateRange.from || !dateRange.to}
              onClick={handleGenerateReport}
            >
              Gerar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
