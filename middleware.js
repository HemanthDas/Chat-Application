import { NextResponse } from "next/server";

export function middleware(request) {
  // const currentUser = request.cookies.get("currentUser")?.value;
  // if (currentUser) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  // return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
  matcher: ["/direct/:chatid*", "/"],
};
