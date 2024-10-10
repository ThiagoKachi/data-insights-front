interface IFetcher {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  contentType?: string;
}

export async function fetcher({
  url,
  method = "GET",
  body = undefined,
  contentType = "application/json",
}: IFetcher) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      "Content-Type": contentType,
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
