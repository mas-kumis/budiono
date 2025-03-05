import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request & { nextUrl: URL }) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }
  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });
  if (!product) {
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}
