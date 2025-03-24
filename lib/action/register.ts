"use server";

import * as z from "zod";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schema";

const register = async (formData: z.infer<typeof RegisterSchema>) => {
  try {
    const validateData = RegisterSchema.parse(formData);
    const existingUser = await prisma.user.findUnique({
      where: {
        email: validateData.email,
      },
    });

    if (existingUser) {
      return new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(validateData.password, 10);
    await prisma.user.create({
      data: {
        email: validateData.email,
        name: validateData.name,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.error("Error during registration", error);
    throw new Error("Something went wrong");
  }
};

export { register };
