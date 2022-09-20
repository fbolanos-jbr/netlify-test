import { authentication } from "./resources/authentication";

export class Api {
  protected loginUrl = `${process.env.REACT_APP_API_BASE_URL}/login`;
  protected apiBaseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;




  //methods
  login = authentication.login;
}
