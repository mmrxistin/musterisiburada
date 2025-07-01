// Bismillahirahmanirahim 
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah



import { NextRequest, NextResponse } from "next/server";
import { validateRequest } from "@/auth";
import streamServerClient from "@/lib/stream";

export async function GET(req: NextRequest) {
  try {
    const { user } = await validateRequest();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60;
    const issuedAt = Math.floor(Date.now() / 1000) - 60;
    const token = streamServerClient.createToken(
      user.id,
      expirationTime,
      issuedAt,
    );
    return NextResponse.json({ token });
  } catch (error) {
    console.error("get-token error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
