// import { NextResponse } from "next/server";

// // we are not exporting by default
// export async function middleware(req, ev) {
  
//   const token = req ? req.cookies?.token : null;
//   const { pathname } = req.nextUrl;
//   if (
//     // whatever your api route for login is
//     pathname.includes("/api/login")
//   ) {
//     return NextResponse.next();
//   }

  
//   if (pathname !== "/login") {
//     // since you want to redirect the user to "/"
//     return NextResponse.redirect("/");
//   }
// }