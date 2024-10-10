import { Activity, ArrowUpRight, CreditCard, DollarSign } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import { cn } from "@/lib/utils";
import { fetchTransactions } from "@/utils/actions/getTransactions";
import { fetchTransactionsResume } from "@/utils/actions/getTransactionsResume";
import { formatCurrency } from "@/utils/formatCurrenct";
import { formatDate } from "@/utils/formatDate";

export default async function Dashboard() {
  const { data } = await fetchTransactions();
  const { finalBalance, totalExpenses, totalRevenue, totalTaxes } =
    await fetchTransactionsResume();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zinc-600">
                Receita Total
              </CardTitle>
              <DollarSign className="h-4 w-4 text-zinc-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">
                {formatCurrency(String(totalRevenue))}
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zinc-600">
                Despesas Totais
              </CardTitle>
              <DollarSign className="h-4 w-4 text-zinc-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">
                {formatCurrency(String(totalExpenses))}
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zinc-600">
                Total em Taxas
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {formatCurrency(String(totalTaxes))}
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zinc-600">
                Balanço Final
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div
                className={cn(
                  "text-2xl font-bold",
                  finalBalance < 0 ? "text-red-500" : "text-green-500",
                )}
              >
                {formatCurrency(String(finalBalance))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Lista de transações</CardTitle>
              <CardDescription>Transações recentes da conta</CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/transactions-list">
                Ver todas
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="">Tipo</TableHead>
                  <TableHead className="">Status</TableHead>
                  <TableHead className="">Data</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <div className="font-semibold text-primary">
                        {transaction.entity}
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Categoria: {transaction.category}
                      </div>
                    </TableCell>
                    <TableCell
                      className={cn(
                        "font-semibold",
                        transaction.type === "income"
                          ? "text-green-500"
                          : "text-red-500",
                      )}
                    >
                      {transaction.type === "income" ? "Receita" : "Despesa"}
                    </TableCell>
                    <TableCell className="">
                      <Badge
                        className="text-xs"
                        variant={
                          transaction.status === "paid"
                            ? "paid"
                            : transaction.status === "canceled"
                              ? "canceled"
                              : "pending"
                        }
                      >
                        {transaction.status === "paid"
                          ? "Pago"
                          : transaction.status === "canceled"
                            ? "Cancelado"
                            : "Pendente"}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {formatDate(transaction.transaction_date)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(transaction.value)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
