import { ADMIN_EMAIL } from "./constants";

export function isGlobalAdmin(email?: string | null) {
  return email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();
}
