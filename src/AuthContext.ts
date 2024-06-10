import { createContext } from "react";

export const anonymusUser = {
  name: "Anonymus"
}

export interface AuthInfo {
  user: {
    name: string;
  }
}

export const AuthContext = createContext<AuthInfo>({ user: anonymusUser });