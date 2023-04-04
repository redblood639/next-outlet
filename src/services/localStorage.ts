export const setTokens = (authRes: any) => {
  localStorage.setItem("token", JSON.stringify(authRes.token));
};

export const removeTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("token");
};

export const getAccessToken = () => localStorage.getItem("token")?.slice(1, -1);
