import { fetcher } from "../fetch";

export async function deleteTransactions(ids: string[]) {
  await fetcher({
    url: `${process.env.NEXT_PUBLIC_API_URL}/transactions/batch`,
    method: "POST",
    body: { ids },
  });
}
