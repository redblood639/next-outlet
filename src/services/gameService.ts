import { env_var } from "@/config/env";
import authenticatedAxios from "@/utils/authenticatedAxios";

export interface GamePayLoad {
  gameName: string;
  blockchainPlatform: string;
  gameIconLink: string;
  googleLink: string;
  gamePreviewLink: string;
  videoUrls: string[];
  imageLinks: string[];
  bannerLink: string;
  downloads: string;
  rating: string;
  genre: string;
  intro: string;
  description: string;
}

export const createGame = async (data: GamePayLoad) => {
  try {
    await authenticatedAxios.post(env_var.BASE_URL + "/game-metadata", data);

    return {
      status: true,
    };
  } catch {
    return { status: false, data: "Something went wrong" };
  }
};

export const loadGame = async () => {
  try {
    const result: any = await authenticatedAxios.get(
      env_var.BASE_URL + "/games-url"
    );

    return result;
  } catch {
    return "Something went wrong";
  }
};
