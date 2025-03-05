import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  if (request.method !== "GET") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
  try {
    const products = await prisma.product.findMany();
    if (products.length === 0) {
      return NextResponse.json({ message: "No Products" }, { status: 404 });
    }
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error Fetching Products", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json(
      {
        message: "Method not allowed",
      },
      { status: 405 }
    );
  }
  try {
    const data = await request.json();
    if (!data.title || !data.price || !data.category) {
      return NextResponse.json(
        { message: "Please fill all fields" },
        { status: 400 }
      );
    }
    const product = await prisma.product.create({ data });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error Fetching Products", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
