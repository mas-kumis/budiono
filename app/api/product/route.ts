import { NextResponse } from "next/server";

export async function GET() {
  const product = { name: "Wildan" };
  return NextResponse.json(product);
}
