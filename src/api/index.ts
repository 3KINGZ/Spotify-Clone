import getLoginClient from "services/api/loggedInClient";
import tokenClient from "services/api/tokenClient";

export const login = () =>
  tokenClient.post("api/token", "grant_type=client_credentials");

export const getNewReleases = async () => {
  const login = await getLoginClient();
  return login.get("v1/browse/new-releases");
};

export const getAlbum = async (id: string) => {
  const login = await getLoginClient();
  return login.get(`v1/albums/${id}`);
};
