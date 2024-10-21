import { NextResponse } from 'next/server';

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|js|favicon.ico|sw.js).*)']
};

export function middleware() {
  const response = NextResponse.next();

  return response;
}
