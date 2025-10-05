"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-darkAppColor p-4 shadow-md sticky">
      <div className="container mx-auto">
        {/* Mobile menu button */}
        <div className="flex justify-between items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
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
          <span className="text-white font-semibold">Home Project</span>
        </div>

        <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <Link
              className="navbarLink"
              href="/pages/about"
              onClick={() => setIsMenuOpen(false)}
            >
              Om mig
            </Link>
            <Link
              className="navbarLink"
              href="/pages/projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Projekter
            </Link>
            <Link
              className="navbarLink"
              href="/pages/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
