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

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center mt-[15%]">
      <Image
        src='/logo.svg'
        alt='Logo'
        quality={100}
        priority={true}
        width={320}
        height={320}
        className="mb-2"
      />
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Coloque suas informações para login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
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
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link href="/password-recovery" className="ml-auto inline-block text-sm underline">
                  Esqueceu sua senha?
                </Link>
              </div>
              <Input id="password" type="password" required  placeholder="••••••••"/>
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Ainda não tem uma conta?{" "}
            <Link href="/sign-up" className="underline">
              Cadastre-se
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
