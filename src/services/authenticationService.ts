import { getAccessToken } from "./localStorage";
import { env_var } from "@/config/env";
import axios from "axios";

export interface AuthPayload {
  username: string;
  password: string;
}

export const authenticate = async (data: AuthPayload) => {
  try {
    const result: any = await axios.post(env_var.BASE_URL + "/token", data);
    return {
      status: true,
      data: {
        user: result.data.user,
        token: result.data.token,
      },
    };
  } catch {
    return { status: false, data: "Something went wrong" };
  }
};

export const isAuthenticated = (): boolean => {
  return getAccessToken() ? true : false;
};
