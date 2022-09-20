import axios from "axios";
import { Api } from "../api";

export const authentication = {
  login: async function (this: Api, username: string, password: string) {
    try {
      const formData = {
        authentication: {
          email: username,
          password: password,
        },
      };

      let result = axios.post(this.loginUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return result;
    } catch (error) {
      return error;
    }
  },
};
