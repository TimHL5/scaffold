import { NextRequest, NextResponse } from 'next/server';

const protectedPaths = ['/dashboard', '/timeline', '/checklist', '/strategy', '/analytics'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(path + '/')
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  const session = request.cookies.get('hq_session');

  if (session?.value !== 'authenticated') {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/timeline/:path*', '/checklist/:path*', '/strategy/:path*', '/analytics/:path*'],
};
