export async function fetcher(url: string, method = "GET") {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
    method,
  }).then((res) => res.json());
}
