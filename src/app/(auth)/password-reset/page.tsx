"use client"

import { Button } from "@/components/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/Card"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import { useState } from "react"

export default function PasswordReset() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Aqui você adicionaria a lógica para redefinir a senha
    console.log("Redefinindo senha para:", password)
  }

  return (
    <div className="flex items-center -mt-24 justify-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Redefinir Senha</CardTitle>
          <CardDescription>Digite sua nova senha.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Nova Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex">
          <Button type="submit" onClick={handleSubmit} className="w-full">
            Redefinir Senha
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}