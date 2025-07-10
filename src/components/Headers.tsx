'use client'
import Link from 'next/link';
import { AlignJustify, Monitor, Sun, X } from "lucide-react"
import { useState } from 'react';

function Headers() {
  const [showmenu, setShowMenu] = useState<boolean>(false)

  const handleOpenMenu = () => {
    setShowMenu(!showmenu)
  }

  return (
    <nav className="relative">
      <div className="w-full relative z-10">

        {/* Mobile Menu Button */}
        <div className='md:hidden fixed top-4 right-4 z-30'>
          <button
            onClick={handleOpenMenu}
            aria-label="Toggle Menu"
            className="p-2 rounded-md bg-gradient-to-r from-[#669bbc] to-[#003049] border-2 border-white bg-opacity-80 hover:bg-opacity-100 transition-transform duration-500 shadow-md"
            style={{
              transform: showmenu ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.5s ease'
            }}
          >
            {showmenu ? <X size={24} /> : <AlignJustify size={24} />}
          </button>
        </div>

        {/* Overlay وقتی منو باز است */}
        {showmenu && (
          <div
            onClick={() => setShowMenu(false)}
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-20 transition-opacity duration-500"
          />
        )}

        {/* Full Menu: Logo + Links + Icons */}
        <div
          className={`
            md:flex md:flex-row md:justify-between items-center md:h-24
            backdrop-blur-xl bg-gradient-to-r from-[#003049]/80 to-[#669bbc]/80 text-white
            fixed md:static inset-0 md:inset-auto
            overflow-hidden
            transition-all duration-700 ease-in-out transform
            ${
              showmenu
                ? 'translate-y-0 opacity-100 flex flex-col items-center justify-center gap-10 delay-150'
                : '-translate-y-full opacity-0 md:translate-y-0 md:opacity-100 md:flex'
            }
          `}
          style={{ zIndex: 25 }}
        >
          {/* Logo */}
          <div className='flex justify-center md:justify-start items-center p-2'>
            <Monitor size={32} className="drop-shadow-lg" />
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center gap-5">
            <Link href={'/'} onClick={() => setShowMenu(false)} className="hover:text-[#ffbe0b] transition-colors duration-300">Home</Link>
            <Link href={'/product'} onClick={() => setShowMenu(false)} className="hover:text-[#ffbe0b] transition-colors duration-300">Product</Link>
            <Link href={'/'} onClick={() => setShowMenu(false)} className="hover:text-[#ffbe0b] transition-colors duration-300">About Us</Link>
            <Link href={'/'} onClick={() => setShowMenu(false)} className="hover:text-[#ffbe0b] transition-colors duration-300">Contact Us</Link>
          </div>

          {/* Icon */}
          <div className='flex justify-center md:justify-end items-center p-2'>
            <Sun size={28} className="hover:rotate-45 transition-transform duration-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Headers;
