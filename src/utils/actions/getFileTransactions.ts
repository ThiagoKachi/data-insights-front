import { IFiles } from "@/@types/Files";
import { IPagination } from "@/@types/Pagination";
import { fetcher } from "../fetch";

export async function fetchTransactionsFiles(pageIndex: number = 1) {
  const transactionsFiles = await fetcher({
    url: `${process.env.NEXT_PUBLIC_API_URL}/transactions/files?pageIndex=${pageIndex}&pageSize=10`,
  });

  return transactionsFiles as { data: IFiles[]; pagination: IPagination };
}
