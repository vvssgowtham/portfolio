"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { DATA } from "@/data/portfolio";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b-2 border-black">
      <div className="flex items-center justify-between h-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-3xl font-bold tracking-tight bg-gum-pink border-2 border-black p-1 px-3 shadow-[4px_4px_0px_0px_#000] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_#000] transition-all">
            G
          </div>
          <span className="text-xl font-bold hidden md:block">Gowtham.dev</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center h-full border-x-2 border-black ml-auto bg-white">
          <Link
            href="#experience"
            className="h-full flex items-center px-6 hover:bg-gum-pink hover:text-black transition-colors border-r-2 border-black font-medium"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            className="h-full flex items-center px-6 hover:bg-gum-yellow hover:text-black transition-colors border-r-2 border-black font-medium"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="h-full flex items-center px-6 hover:bg-gum-teal hover:text-white transition-colors border-r-2 border-black font-medium"
          >
            Projects
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center pl-6">
          <Link
            href={DATA.contact.email}
            className="gumroad-button gumroad-shadow hover:gumroad-shadow-hover bg-black text-white hover:bg-gum-pink hover:text-black"
          >
            Work with me
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 border-2 border-black rounded shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none bg-gum-yellow"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-black bg-white">
          <div className="flex flex-col p-4 gap-4">
            <Link
              href="#experience"
              onClick={() => setIsOpen(false)}
              className="p-4 text-xl font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000] bg-gum-pink hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] transition-all text-center"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="p-4 text-xl font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000] bg-gum-yellow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] transition-all text-center"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="p-4 text-xl font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000] bg-gum-teal text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] transition-all text-center"
            >
              Projects
            </Link>
            <Link
              href={DATA.contact.email}
              onClick={() => setIsOpen(false)}
              className="p-4 text-xl font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000] bg-black text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] transition-all text-center"
            >
              Work with me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
