export function formatCurrency(amount: string) {
  const amountNumber = Number(amount);

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BRL",
  }).format(amountNumber);
}
