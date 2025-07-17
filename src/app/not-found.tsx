'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col justify-center items-center px-6 text-center select-none">
      {/* عدد 404 */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* متن توضیحی */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 max-w-xl text-gray-300 text-lg md:text-xl"
      >
        Oops! The page you're looking for doesn't exist.  
        Maybe it wandered off somewhere else.
      </motion.p>

      {/* دکمه برگشت */}
      <motion.a
        href="/"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        whileHover={{ scale: 1.05, backgroundColor: '#7c3aed', color: 'white' }}
        className="mt-10 inline-block rounded-md bg-indigo-600 px-10 py-3 font-semibold text-white shadow-lg shadow-indigo-500/50 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 cursor-pointer select-none"
      >
        Back to Home
      </motion.a>
    </div>
  );
}
