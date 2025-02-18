import AsyncStorage from "@react-native-async-storage/async-storage";
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

  async refreshAccessToken(refreshToken) {}

  async setAccessToken(token) {
    await AsyncStorage.setItem(ENV.JWT.ACCESS, token);
  }

  async getAccessToken() {
    return await AsyncStorage.getItem(ENV.JWT.ACCESS);
  }

  async setRefreshToken(token) {
    await AsyncStorage.setItem(ENV.JWT.REFRESH, token);
  }

  async getRefreshToken() {
    return await AsyncStorage.getItem(ENV.JWT.REFRESH);
  }

  async removeTokens() {
    await AsyncStorage.removeItem(ENV.JWT.ACCESS);
    await AsyncStorage.removeItem(ENV.JWT.REFRESH);
  }
}
