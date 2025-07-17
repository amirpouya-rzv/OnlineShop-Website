import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-dark-blue to-[#669bbc] text-white dark:from-bg-dark dark:to-dark-blue shadow-inner shadow-dark-gray dark:shadow-light-blue mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo + Info */}
        <div className="flex items-center gap-4">
          <Image width={100} height={50} className='rounded-2xl' alt='logo' src={'/download.png'} />
          <div className="text-sm md:text-base">
            <p className="font-semibold">© Created by</p>
            <p className="text-xs md:text-sm opacity-80">AMIRPOYA REZVANI</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row gap-5 text-sm md:text-base">
          <Link href="https://www.linkedin.com/in/amir-pouya-rezvani-bb8a92317" target="_blank" rel="noopener noreferrer" className="hover:text-light-blue transition-colors duration-300"><Linkedin /></Link>
          <Link href="https://github.com/amirpouya-rzv" target="_blank" rel="noopener noreferrer" className="hover:text-light-blue transition-colors duration-300"><Github /></Link>
          <Link href="/" className="hover:text-light-blue transition-colors duration-300"><Twitter /></Link>
          <Link href="/" className="hover:text-light-blue transition-colors duration-300"><Instagram /></Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
