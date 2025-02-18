import jwtDecode from "jwt-decode";

export function hasExpiredToken(token) {
  console.log(token);

  const { exp } = jwtDecode(token);
  const currentDate = Date.now();

  const expDate = exp * 1000;

  if (expDate <= currentDate) {
    return true;
  }

  return false;
}
