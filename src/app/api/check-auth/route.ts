import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";

export const runtime = 'edge';

async function handler(request: NextRequest) {
  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = cookie.parse(cookieHeader);

  if (cookies.authToken === "authenticated") {
    return NextResponse.json({ authenticated: true }, { status: 200 });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}

export const GET = handler;
