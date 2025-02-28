"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">TestAI</h1>
      <ul className="flex gap-4">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/about">À propos</Link></li>
        <li><Link href="/work">Nos solutions</Link></li>
        <li><Link href="/team">Notre équipe</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
