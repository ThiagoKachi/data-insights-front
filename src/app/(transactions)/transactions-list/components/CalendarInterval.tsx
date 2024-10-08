import { Button } from "@/components/Button";
import { Calendar } from "@/components/Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

interface CalendarIntervalProps {
  dateRange: { from: Date | undefined; to: Date | undefined };
  setDateRange: React.Dispatch<
    React.SetStateAction<{ from: Date | undefined; to: Date | undefined }>
  >;
}

export function CalendarInterval({
  dateRange,
  setDateRange,
}: CalendarIntervalProps) {
  return (
    <div className="flex items-center space-x-2">
      <Popover>
        <div className="flex flex-col">
          <small className="font-medium text-zinc-500">Filtrar por data:</small>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={`w-[300px] justify-start text-left font-normal ${!dateRange.from && "text-muted-foreground"}`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "LLL dd, y")} -{" "}
                    {format(dateRange.to, "LLL dd, y")}
                  </>
                ) : (
                  format(dateRange.from, "LLL dd, y")
                )
              ) : (
                <span>Selecione um intervalo de datas</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange.from}
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
            />
          </PopoverContent>
        </div>
      </Popover>
    </div>
  );
}
