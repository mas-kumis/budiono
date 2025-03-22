import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/sign-in");
  return (
    <div>
      <h1>Home</h1>
      <p>Protected by auth middleware</p>
      <p> Signed in as : </p>
    </div>
  );
}
