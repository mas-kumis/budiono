import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (!data.name || !data.email || !data.password) {
      return NextResponse.json(
        { error: "Please fill all fields" },
        { status: 400 }
      );
    }
    const isEmailExist = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (isEmailExist) {
      return NextResponse.json(
        { error: "Email already used" },
        { status: 400 }
      );
    }
    const user = await prisma.user.create({ data });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
