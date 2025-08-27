"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  user?: {
    name?: string | null;
    email?: string | null;
  };
}

export default function Navbar({ user }: NavbarProps) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            MyApp
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/about" className="hover:text-gray-200">About</Link>
            <Link href="/blog" className="hover:text-gray-200">Blog</Link>
            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
            {session ? (
              <>
                <span className="text-sm">Hi, {user?.name || "User"}</span>
                <button
                  onClick={() => signOut()}
                  className="bg-white text-blue-600 px-3 py-1 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => signIn()}
                className="bg-white text-blue-600 px-3 py-1 rounded"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-3 space-y-3">
          <Link href="/about" className="block">About</Link>
          <Link href="/blog" className="block">Blog</Link>
          <Link href="/contact" className="block">Contact</Link>
          {session ? (
            <button
              onClick={() => signOut()}
              className="bg-white text-blue-600 w-full py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-white text-blue-600 w-full py-1 rounded"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
