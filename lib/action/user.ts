"use server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

const register = async (formData: FormData): Promise<void> => {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!name || !email || !password) {
    throw new Error("Please fill all the fields");
  }
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      throw new Error("User already exists");
     }
    const hashedPassword = await bcrypt.hash(password.toString(), 10);
    await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.error("Error durinf registration", error);
    throw new Error("Something went wrong");
  }
};

export { register };
