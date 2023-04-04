import { getAccessToken } from "./localStorage";
import { env_var } from "@/config/env";
import axios from "axios";
import authenticatedAxios from "@/utils/authenticatedAxios";

export interface AuthPayload {
  username: string;
  password: string;
}

export const authenticate = async (data: AuthPayload) => {
  return {
    status: true,
    data: {
      user: "result.data.user",
      token: " result.data.JWT",
    },
  };

  try {
    const result: any = await axios.post(env_var.BASE_URL + "/sign-in", data);
    return {
      status: true,
      data: {
        user: "result.data.user",
        token: result.data.JWT,
      },
    };
  } catch {
    return { status: false, data: "Something went wrong" };
  }
};

export const loadUserInfo = async () => {
  return {
    status: true,
    data: {
      user: "your email",
    },
  };

  try {
    const result: any = await authenticatedAxios.get("/me");
    return {
      status: true,
      data: {
        user: result.data.user,
      },
    };
  } catch {
    return { status: false, data: "Something went wrong" };
  }
};

export const isAuthenticated = (): boolean => {
  return getAccessToken() ? true : false;
};
