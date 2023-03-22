import { getAccessToken } from "./localStorage";
import { env_var } from "@/config/env";

export interface AuthPayload {
  username: string;
  password: string;
}

export const authenticate = async (data: AuthPayload) => {
  if (
    data.username === env_var.USER_NAME &&
    data.password === env_var.PASSWORD
  ) {
    return {
      status: true,
      data: {
        user: env_var.USER_NAME,
        token: env_var.USER_NAME,
        refreshToken: env_var.USER_NAME,
      },
    };
  } else {
    return { status: false, data: "Something went wrong" };
  }
};

export const isAuthenticated = (): boolean => {
  return getAccessToken() ? true : false;
};
