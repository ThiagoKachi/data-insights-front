import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu"
import { Input } from "@/components/Input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/Sheet"
import { CircleUser, Menu, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./Button"

export function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 bg-white z-[999]">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="/dashboard">
            <div className="flex items-center w-max h-max -ml-12">
              <Image
                src='/logo.svg'
                alt='Logo'
                quality={100}
                priority={true}
                width={300}
                height={300}
              />
            </div>
          </Link>
          <Link
            href="/dashboard"
            className="text-foreground transition-colors hover:text-foreground -ml-12"
          >
            Home
          </Link>
          <Link
            href="/transactions-list"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Transações
          </Link>
          <Link
            href="/transactions-files"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Arquivos
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/dashboard">
                <div className="flex items-center w-max h-max -ml-16">
                  <Image
                    src='/logo.svg'
                    alt='Logo'
                    quality={100}
                    priority={true}
                    width={300}
                    height={300}
                  />
                </div>
              </Link>
              <Link href="/dashboard" className="hover:text-foreground">
                Home
              </Link>
              <Link
                href="/transactions-list"
                className="text-muted-foreground hover:text-foreground"
              >
                Transações
              </Link>
              <Link
                href="/transactions-files"
                className="text-muted-foreground hover:text-foreground"
              >
                Arquivos
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-2">
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link href="/login">
                <DropdownMenuItem>Sair</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
  )
}