import { fetcher } from "../fetch";

interface ITransactionsResumeResponse {
  totalExpenses: number;
  totalRevenue: number;
  finalBalance: number;
  totalTaxes: number;
}

export async function fetchTransactionsResume() {
  const transactionsFiles = await fetcher({
    url: `${process.env.NEXT_PUBLIC_API_URL}/transactions/report/json`,
  });

  return transactionsFiles as ITransactionsResumeResponse;
}
