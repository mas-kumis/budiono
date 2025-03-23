import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadown-input bg-white border border-[#121212] dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to My Shop
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        {" "}
        Plase provide all the necessary information{" "}
      </p>
      <form className="my-8">
        <div className="flex flex-col space-y-2 md:space-y-4 md:space-x-2 mb-4">
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="First Name"
                type="text"
                name="firstName"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Last Name"
                type="text"
                name="lastName"
              />
            </div>
          </div>
          <div>
            {" "}
            <Label>Email Adress</Label>
            <Input
              id="email"
              placeholder="Email Adress"
              type="email"
              name="email"
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input id="email" placeholder="****" type="password" name="email" />
          </div>
          <Button>Sign Up</Button>
          <Button variant={"outline"}>
            <Github />
            Sign With Github
          </Button>
          <Link
            className="text-sm text-neutral-600 dark:text-neutral-300"
            href={"/login"}
          >
            Already User? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default page;
