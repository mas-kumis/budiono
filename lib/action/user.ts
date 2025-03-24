"use server";
import { prisma } from "@/lib/prisma";
const register = async (formData: FormData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      return {
        error: "Please fill all the fields",
      };
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email.toString(),
      },
    });

    if (existingUser) {
      return {
        error: "User already exists",
      };
    }

    const user = await prisma.user.create({
      data: {
        email: email.toString(),
        name: name.toString(),
        password: password.toString(),
      },
    });

    return {
      id: user.id,
    };
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
};

export { register };
