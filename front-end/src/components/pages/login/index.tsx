/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import LoadingWrapper from '@components/elements/LoadingWrapper';
import { FetchError } from '@utils/api';
import { AuthService } from '@utils/api/auth';

const LoginComponent = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    setIsFetching(true);
    e.preventDefault();
    setError(null);

    try {
      const response = await AuthService.login({ username, password });

      if (response && response.data?.token) {
        localStorage.setItem('accessToken', response.data?.token);
        router.push('/');
      } else {
        setIsFetching(false);
        setError(response?.error?.error || 'An unexpected error occurred');
      }
    } catch (error: any) {
      setIsFetching(false);
      if (error instanceof FetchError) {
        const errorMessage = error.responseBody?.error?.error || error.responseBody?.message || 'An unexpected error occurred';
        // Display error message in the UI
        setError(errorMessage);
      } else {
        console.error('Unexpected error:', error);
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <LoadingWrapper isLoading={isFetching}>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full lg:w-1/4 md:w-1/2 flex-col border bg-white px-6 py-14 shadow-md rounded-[4px]">
          <div className="mb-8 flex justify-center">
            <Link href="/" className="font-bold flex items-center">
              <div className="flex gap-4 items-center text-xl">
                <Image width={60} height={60} src="/assets/logos/logo.jpg" alt="STUDY4" className="rounded-full" />
                <h1 className="text-gray-800 font-extrabold tracking-wide">TestMaster</h1>
              </div>
            </Link>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col text-sm rounded-md">
            <input
              className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
              type="submit"
            >
              Sign in
            </button>
          </form>
          {error && <div className="mt-3 text-red-500 text-center text-sm">{error}</div>}
        </div>
      </div>
    </LoadingWrapper>
  );
};

export default LoginComponent;
