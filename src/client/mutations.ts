import { Api } from "./api";

export interface loginProps {
  username: string;
  password: string;
}
const backendApi = new Api();
export const LOGIN_M = async ({ username, password }: loginProps) => {
  const result = await backendApi.login(username, password);
  return result;
};
