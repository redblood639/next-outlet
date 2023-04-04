import { env_var } from "@/config/env";
import { getAccessToken } from "@/services/localStorage";
import axios from "axios";

const ACCESS_TOKEN = getAccessToken();

const authenticatedAxios = axios.create({
  baseURL: env_var.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export default authenticatedAxios;
