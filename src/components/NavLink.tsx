import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className={isActive ? "active" : ""}
        style={{
          color: isActive ? "blue" : "black",
          fontWeight: isActive ? "bold" : "normal",
        }}
      >
        {children}
      </a>
    </Link>
  );
};
