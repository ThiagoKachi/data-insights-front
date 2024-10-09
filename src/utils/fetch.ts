interface IFetcher {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
}

export async function fetcher({
  url,
  method = "GET",
  body = undefined,
}: IFetcher) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      "Content-Type": "application/json",
    },
    method,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  return response.json();
}
