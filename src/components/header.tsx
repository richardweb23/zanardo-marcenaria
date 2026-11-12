"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const links = [["/", "Início"], ["/sobre", "Nossa história"], ["/portfolio", "Portfólio"], ["/contato", "Contato"]];
export default function Header() {
 const [open, setOpen] = useState(false); const path = usePathname();
 return <header className="site-header"><div className="header-inner"><Link href="/" onClick={() => setOpen(false)} aria-label="Zanardo Marcenaria, início"><Image src="/logo-preta.svg" alt="Zanardo Marcenaria" width={145} height={55} priority /></Link>
 <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav" aria-label={open ? "Fechar menu" : "Abrir menu"}><span></span><span></span><span></span></button>
 <nav id="site-nav" className={open ? "site-nav open" : "site-nav"} aria-label="Navegação principal">{links.map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={path === href ? "page" : undefined}>{label}</Link>)}<a className="header-cta" href="https://wa.me/5521970002758" target="_blank" rel="noopener noreferrer">Solicitar orçamento <span>↗</span></a></nav></div></header>
}