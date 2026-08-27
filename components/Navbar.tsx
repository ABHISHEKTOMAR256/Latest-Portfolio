"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-blue-500/10 shadow-[0_4px_30px_rgba(37,99,235,0.08)]">
      <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-extrabold text-lg tracking-wide bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-blue-600 transition-all"
        >
          Abhishek Tomar...<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group relative text-sm text-neutral-300 hover:text-white transition-colors py-1"
            >
              {link.name}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/ABHISHEKTOMAR256"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] transition"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-tomar-625202294/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 bg-black/95 border-t border-blue-500/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-neutral-300 hover:text-white transition pt-4"
            >
              {link.name}
            </a>
          ))}

          {/* Social Icons (Mobile) */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/ABHISHEKTOMAR256"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-blue-500 transition"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-tomar-625202294/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-blue-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
