import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(request: NextRequest) {
  console.log(
    '🚀 ~ file: middleware.ts:4 ~ middleware ~ request:',
    request.nextUrl
  );
  let cookie = request.cookies.get('token');
  console.log('🚀 ~ file: middleware.ts:9 ~ middleware ~ cookie:', cookie.name);
  if (request.nextUrl.pathname === '/about') {
    return NextResponse.redirect(new URL('/redirected', request.url));
  }
  if (request.nextUrl.pathname === '/another') {
    return NextResponse.rewrite(new URL('/rewrite', request.url));
  }
  const response = NextResponse.next();
  response.cookies.set({
    name: cookie.name,
    value: cookie.value,
    path: '/redirected/*'
  });
  return response;
}

export const config = {
  matcher: ['/about/:path*', '/another/:path*']
};
