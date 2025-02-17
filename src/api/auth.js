import { ENV } from "../utils";

export class Auth {
  async register(email, password) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 201) throw result;

    return result;
  }

  async login(email, password) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  }
}
