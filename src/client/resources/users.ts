import axios from 'axios';
import { Api } from '../api';

export interface user {
  rol_id: number;
  village_id: number;
  status_id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  password_confirmation: string;
  first_login: number;
  phone: number;
  birthday: string;
  dpi?: number;
  nickname?: string;
}

export const users = {
  createUser: async function (this: Api, userData: user) {
    try {
      const formData = {
        user: {
          rol_id: userData.rol_id,
          village_id: userData.village_id,
          status_id: userData.status_id,
          name: userData.name,
          lastname: userData.lastname,
          email: userData.email,
          password: userData.password,
          password_confirmation: userData.password_confirmation,
          first_login: userData.first_login,
          phone: userData.phone,
          birthday: userData.birthday,
          dpi: userData?.dpi ?? "",
          nickname: userData?.nickname ?? "",
        },
      };

      let result = axios.post(
        [process.env.REACT_APP_API_BASE_URL as string, "/login"].join(""),
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return result;
    } catch (error) {
      return error;
    }
  },
};
