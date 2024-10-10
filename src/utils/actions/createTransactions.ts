export async function createTransactions(file: FormData) {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions`, {
    method: "POST",
    body: file,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });
}
