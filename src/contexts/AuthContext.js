import { useState, useEffect, createContext } from "react";
import { User, Auth } from "../api";

const userController = new User();
const authController = new Auth();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const accessToken = await authController.getAccessToken();
      const refreshToken = await authController.getRefreshToken();
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);

      setLoading(false);
    })();
  }, []);

  const reLogin = async (refreshToken) => {};

  const login = async (accessToken) => {
    try {
      setLoading(true);
      const response = await userController.getMe(accessToken);
      setUser(response);
      setToken(accessToken);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const logout = () => {};

  const updateUser = (key, value) => {};

  const data = { accessToken: token, user, login, logout, updateUser };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
