import { format } from "date-fns";

export function formatDate(dateString: string | Date) {
  const formattedDate = format(new Date(dateString), "dd/MM/yyyy");
  return formattedDate;
}
