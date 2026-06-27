import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { isGlobalAdmin } from "@atlas/shared/permissions";

export async function requireAuth() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return session;
}

export async function requireGlobalAdmin() {
  const session = await requireAuth();

  if (!isGlobalAdmin(session.user.email)) {
    redirect("/unauthorized");
  }

  return session;
}
