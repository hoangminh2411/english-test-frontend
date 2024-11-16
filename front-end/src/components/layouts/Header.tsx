/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useAuth } from '@components/providers/AuthProvider';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth(); // Access user and logout from AuthContext

  return (
    <header style={{ boxShadow: '0px 1px 4px rgba(255, 255, 255, 0.2)' }} className="bg-gray-900 text-white  sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left Section: Logo and Navigation */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image width={30} height={30} src="/assets/logos/logo.jpg" alt="STUDY4" className="rounded-full" />
          </Link>
        </div>

        {/* Middle Section: Search */}
        <div className="hidden md:block flex-1 max-w-lg">
          <div className="relative">
            <input
              type="text"
              placeholder="Type / to search"
              className="w-full bg-gray-800 text-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <div className="absolute top-2 right-4 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Section: Profile and Menu */}
        <div className="flex items-center gap-4">
          {/* Dropdown Menu for Profile */}
          {user ? (
            <div className="flex items-center gap-2">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative focus:outline-none">
                <img
                  src={'https://i.pravatar.cc/150?u=a042581f4e29026704d'}
                  alt={`${user.username}'s avatar`}
                  width={36}
                  height={36}
                  className="rounded-full cursor-pointer"
                />
                {/* Dropdown */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-gray-800 text-gray-300 rounded shadow-lg w-48">
                    <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition">
                      Logout
                    </button>
                  </div>
                )}
              </button>
            </div>
          ) : (
            <Link href="/login" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
