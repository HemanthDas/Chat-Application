import { NextResponse } from "next/server";

export function middleware(request) {
  const currentUser = request.cookies.get("currentUser")?.value;
  if (!currentUser) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/")) {
    return NextResponse.redirect(new URL("/dashboard/direct", request.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/"],
};
