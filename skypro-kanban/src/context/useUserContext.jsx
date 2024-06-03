import { useContext } from "react";
import { UserContext } from "./user";

export function useUserContext() {
  const user = useContext(UserContext);

  if (!user) {
    // throw new Error("User not found");
  }

  return user;
}
