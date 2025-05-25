import Link from 'next/link';
import React, { useState } from 'react';
import AuthModal from 'components/Auth/AuthModal';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className="fixed top-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/20 px-6 py-2 flex justify-between items-center left-0 w-full">
      <div className="flex items-center space-x-6">
        <div className="logo flex items-center space-x-1 italic">
          <img
            alt="Logo"
            loading="lazy"
            width={48}
            height={44}
            decoding="async"
            src="/img/logo.png"
            className="text-transparent"
          />
          <span className="text-white text-xl font-bold">
            G1
            <span className="text-yellow-500 text-xl font-bold Logo">LibraNet</span>
          </span>
        </div>
        <ul className="hidden md:flex space-x-6 text-white font-bold text-sm">
          <li>
            <Link href="#home" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-yellow-500">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-yellow-500">
              Services
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-yellow-500">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/admin" className="hover:text-yellow-500">
              Admin Panel
            </Link>
          </li>
          <li>
            <Link href="/library" className="hover:text-yellow-500">
              Library
            </Link>
          </li>
        </ul>
      </div>
      <button
       onClick={() => setShowModal(true)}
       className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 
        rounded-full text-sm font-semibold hover:from-yellow-500 hover:to-orange-600">
        Log In
      </button>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </nav>
  );
}
