import { UseAuth } from "@components/contexts/AuthContext";

export function getUserEmail(): string {
  const { user, isAuthenticated } = UseAuth();
  let email = "";
  if (user && isAuthenticated) {
    email = user.email;
  }
  return email;
}