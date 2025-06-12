import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";

interface AuthRequestBody {
  password: string;
}

export const runtime = 'edge';

async function handler(request: NextRequest) {
  const body = await request.json() as AuthRequestBody;
  const { password } = body;
  const correctPassword = process.env.PAGE_ACCESS_PASSWORD;

  if (!correctPassword) {
    console.error('PAGE_ACCESS_PASSWORD environment variable is not set');
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }

  if (password === correctPassword) {
    const response = NextResponse.json({ success: true }, { status: 200 });
    
    response.headers.set(
      "Set-Cookie",
      cookie.serialize("authToken", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
      })
    );

    return response;
  } else {
    return NextResponse.json({ message: "Incorrect password" }, { status: 401 });
  }
}

export const POST = handler;
