'use client';

import Link from 'next/link';
import { AlignJustify, Monitor, Sun, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from '@/redux/reduxHooks';
import { setShowMenu, toggleTheme } from '@/redux/ui-management/ui-Managemnet';

function Headers() {
  const dispatch = useAppDispatch();
  const showMenu = useAppSelector((state) => state.uiManager.showMenu);

  const toggleMenu = () => {
    dispatch(setShowMenu(!showMenu));
  };

  return (
    <nav className="relative">
      
      <div className="w-full relative z-10">

        {/* Mobile Menu Button */}
        <div className='md:hidden fixed top-4 right-4 z-30'>
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="p-2 rounded-md bg-gradient-to-r from-[#669bbc] to-[#003049] border-2 border-white bg-opacity-80 hover:bg-opacity-100 transition-transform duration-500 shadow-md"
            style={{
              transform: showMenu ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.5s ease'
            }}
          >
            {showMenu ? <X size={24} /> : <AlignJustify size={24} />}
          </button>
        </div>

        {/* Overlay وقتی منو باز است */}
        {showMenu && (
          <div
            onClick={() => dispatch(setShowMenu(false))}
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
              showMenu
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
            <Link href={'/'} onClick={() => dispatch(setShowMenu(false))} className="hover:text-[#ffbe0b] transition-colors duration-300">Home</Link>
            <Link href={'/product'} onClick={() => dispatch(setShowMenu(false))} className="hover:text-[#ffbe0b] transition-colors duration-300">Product</Link>
            <Link href={'/'} onClick={() => dispatch(setShowMenu(false))} className="hover:text-[#ffbe0b] transition-colors duration-300">About Us</Link>
            <Link href={'/'} onClick={() => dispatch(setShowMenu(false))} className="hover:text-[#ffbe0b] transition-colors duration-300">Contact Us</Link>
          </div>

          {/* Icon */}
          <button onClick={()=>dispatch(toggleTheme())} className='flex justify-center md:justify-end items-center p-2'>
            <Sun size={28} className="hover:rotate-45 transition-transform duration-500 cursor-pointer" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Headers;
