"use client";

import { Button } from "@/components/Button";
import Link from "next/link";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900">
      <h1 className="text-white font-semibold text-2xl">Ops...</h1>
      <h2 className="text-white font-semibold text-xl mb-2">Algo deu errado</h2>
      <Link href="/dashboard">
        <Button>Voltar para a Home</Button>
      </Link>
      <span className="text-white font-semibold text-base mt-4">
        {error.message}
      </span>
    </div>
  );
}
