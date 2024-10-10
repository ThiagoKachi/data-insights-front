interface GenerateTransactionsReportProps {
  initialPeriod: string;
  finalPeriod: string;
}

export async function generateTransactionsReport({
  initialPeriod,
  finalPeriod,
}: GenerateTransactionsReportProps) {
  fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/transactions/report?initialPeriod=${initialPeriod}&finalPeriod=${finalPeriod}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        "Content-Type": "application/pdf",
      },
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao obter o PDF");
      }
      return response.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `transactions-report-${initialPeriod}-${finalPeriod}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
    .catch((error) => {
      console.error("Erro ao fazer download do PDF:", error);
    });
}
