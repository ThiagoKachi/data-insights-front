"use client"

import { Button } from "@/components/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/Card"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import { ArrowBigLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function PasswordRecovery() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Enviando e-mail de recuperação para:", email)
  }

  return (
    <div className="flex flex-col items-center -mt-24 justify-center min-h-screen">
      <Image
        src='/logo.svg'
        alt='Logo'
        quality={100}
        priority={true}
        width={320}
        height={320}
        className="mb-2"
      />
      <Card className="w-[350px]">
        <CardHeader>
          <Link href="/login" className="mb-2 flex items-center gap-1">
            <ArrowBigLeft className="h-5 w-5" />
            <span className="font-medium text-zinc-600">Voltar</span>
          </Link>
          <CardTitle>Recuperação de Senha</CardTitle>
          <CardDescription>Digite seu e-mail para receber o link de recuperação.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex">
          <Button type="submit" onClick={handleSubmit} className="w-full">
            Enviar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}