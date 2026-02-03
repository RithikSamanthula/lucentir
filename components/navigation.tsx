"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { href: "#capabilities", label: "What We Build" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "How We Work" },
  { href: "#why", label: "Why Lucentir" },
  { href: "#capability-statement", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <nav
        className={`flex items-center justify-between px-6 py-4 rounded-lg transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-sm border border-neutral-800 shadow-lg"
            : "bg-black/80 border border-neutral-800"
        }`}
      >
        <Link href="/" className="flex items-center">
          <span className="text-xl font-semibold tracking-wide text-white">LUCENTIR</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <MobileMenu />
      </nav>
    </header>
  )
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white"
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-black border border-neutral-800 rounded-lg shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm text-neutral-400 hover:text-white transition-colors border-b border-neutral-800 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
