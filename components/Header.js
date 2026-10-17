"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const isHome = path === "/";
  return (
    <header className={isHome ? "header" : "header solid"}>
      <nav aria-label="Menu utama">
        <Link href="/" className={isHome ? "nav-home hidden" : "nav-home"}>Home</Link>
        <Link href="/gallery" aria-current={path === "/gallery" ? "page" : undefined}>Gallery</Link>
        <Link href="/contact" aria-current={path === "/contact" ? "page" : undefined}>Contact</Link>
      </nav>
    </header>
  );
}
