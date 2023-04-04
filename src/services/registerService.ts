import axios from "axios";

import { registerType } from "@/types/auth";
import { env_var } from "@/config/env";

export const registerAccount = async (data: registerType) => {
  await axios.post(env_var.BASE_URL + "/sign-up", data);
};
