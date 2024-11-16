import { Heebo } from 'next/font/google';

import ToastContainerWrapper from '@components/providers/ToastProvider';

import type { Metadata } from 'next';

import './globals.css';

const heebo = Heebo({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'VSTEP B2',
  description: 'Homepage'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={heebo.className} lang="en">
      <body>
        {children}
        <ToastContainerWrapper />
      </body>
    </html>
  );
}
