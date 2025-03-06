import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (request.method !== "GET") {
    return NextResponse.json(
      {
        message: "Method Not Allowed",
      },
      { status: 405 }
    );
  }
  try {
    const { id } = await params;
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error Fething", error);
    return NextResponse.json(
      { message: "internal Server Error" },
      { status: 500 }
    );
  }
}
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (request.method !== "PUT") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const { id } = await params;
    const data = await request.json();
    const product = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        title: data.title,
        price: data.price,
        category: data.category,
      },
    });
    return NextResponse.json(product, {
      status: 200,
    });
  } catch (error) {
    console.error("Error Fetching Products", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (request.method !== "DELETE") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
  try {
    const { id } = await params;
    const product = await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error Fetching Products", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
