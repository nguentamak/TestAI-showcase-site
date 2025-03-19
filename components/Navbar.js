"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">TestAI</h1>
      <ul className="flex gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/contact">Contact us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
