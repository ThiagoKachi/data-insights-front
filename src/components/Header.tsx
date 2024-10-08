"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 bg-white z-[999]">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/dashboard">
          <div className="flex items-center w-max h-max -ml-12">
            <Image
              src="/logo.svg"
              alt="Logo"
              quality={100}
              priority={true}
              width={300}
              height={300}
            />
          </div>
        </Link>
        <Link
          href="/dashboard"
          className={cn(
            "text-foreground transition-colors hover:opacity-80 -ml-12",
            isActive("/dashboard") && "text-primary",
          )}
        >
          Home
        </Link>
        <Link
          href="/transactions-list"
          className={cn(
            "text-foreground transition-colors hover:opacity-80",
            isActive("/transactions-list") && "text-primary",
          )}
        >
          Transações
        </Link>
        <Link
          href="/transactions-files"
          className={cn(
            "text-foreground transition-colors hover:opacity-80",
            isActive("/transactions-files") && "text-primary",
          )}
        >
          Arquivos
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/dashboard">
              <div className="flex items-center w-max h-max -ml-16 mt-14">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  quality={100}
                  priority={true}
                  width={300}
                  height={300}
                />
              </div>
            </Link>
            <Link
              href="/dashboard"
              className={cn(
                "text-foreground transition-colors hover:opacity-80",
                isActive("/dashboard") && "text-primary",
              )}
            >
              Home
            </Link>
            <Link
              href="/transactions-list"
              className={cn(
                "text-foreground transition-colors hover:opacity-80",
                isActive("/transactions-list") && "text-primary",
              )}
            >
              Transações
            </Link>
            <Link
              href="/transactions-files"
              className={cn(
                "text-foreground transition-colors hover:opacity-80",
                isActive("/transactions-files") && "text-primary",
              )}
            >
              Arquivos
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5 text-primary" />
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
  );
}
