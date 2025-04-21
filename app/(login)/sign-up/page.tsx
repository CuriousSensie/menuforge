import { getUser } from "@/queries/user";
import { redirect } from "next/navigation";
import { Login } from "../login";

export default async function SignUpPage() {
  const user = await getUser();
  if (user) {
    return redirect("/app");
  }

  return <Login mode='signup' />;
}
