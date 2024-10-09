import { IPagination } from "@/@types/Pagination";
import { ITransaction } from "@/@types/Transaction";
import { fetcher } from "../fetch";

export async function fetchTransactions(
  pageIndex: number = 1,
  initial_date?: string,
  final_date?: string,
) {
  const queryParams: string[] = [`pageIndex=${pageIndex}`, `pageSize=10`];

  if (initial_date) {
    queryParams.push(`initial_date=${encodeURIComponent(initial_date)}`);
  }

  if (final_date) {
    queryParams.push(`final_date=${encodeURIComponent(final_date)}`);
  }

  const queryString = queryParams.join("&");
  const url = `${process.env.NEXT_PUBLIC_API_URL}/transactions?${queryString}`;

  const transactionsFiles = await fetcher({ url, method: "GET" });

  return transactionsFiles as { data: ITransaction[]; pagination: IPagination };
}
