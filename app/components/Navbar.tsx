"use client";
import Link from "next/link";
import { useState } from "react";
import SettingsMenu from "./Settings";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background p-4 shadow-md sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or title */}
        <h1 className="text-foreground font-bold text-lg">Jesper</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link className="navbarLink" href="/pages/about">
            Om mig
          </Link>
          <Link className="navbarLink" href="/pages/projects">
            Projekter
          </Link>
          <Link className="navbarLink" href="/pages/contact">
            Kontakt
          </Link>
          <SettingsMenu />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link
            className="navbarLink block"
            href="/pages/about"
            onClick={() => setIsMenuOpen(false)}
          >
            Om mig
          </Link>
          <Link
            className="navbarLink block"
            href="/pages/projects"
            onClick={() => setIsMenuOpen(false)}
          >
            Projekter
          </Link>
          <Link
            className="navbarLink block"
            href="/pages/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontakt
          </Link>
          <SettingsMenu />
        </div>
      )}
    </nav>
  );
}
