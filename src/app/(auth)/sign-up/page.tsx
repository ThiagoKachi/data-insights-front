import Link from "next/link"

import { Button } from "@/components/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import Image from "next/image"

export default function SignUpForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src='/logo.svg'
        alt='Logo'
        quality={100}
        priority={true}
        width={320}
        height={320}
        className="mb-2"
      />
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Cadastro</CardTitle>
          <CardDescription>
            Coloque suas informações para criar uma conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Nome</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Sobrenome</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Confirmar senha</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Criar conta
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Já tem uma conta?{' '}
            <Link href="/login" className="underline">
              Fazer login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
