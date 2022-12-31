import axios from "axios";
import jwtDecode from "jwt-decode";
const url = "https://hammerhead-app-bry9f.ondigitalocean.app/api";
axios.defaults.baseURL = url;
export const httpService = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  patch: axios.patch,
  put: axios.put,
};
setTokenHeader();
export function createUser(user) {
  return httpService.post("/users", user);
}
export async function signIn(values) {
  const { data } = await httpService.post("/auth", values);
  localStorage.setItem("token", data.token);
  setTokenHeader();
}
export function getJWT() {
  return localStorage.getItem("token");
}
export function setToCommonHeader(headerName, value) {
  return (axios.defaults.headers.common[headerName] = value);
}
export function setTokenHeader() {
  return setToCommonHeader("x-auth-token", getJWT());
}
export function getUser() {
  try {
    return jwtDecode(getJWT());
  } catch {
    return null;
  }
}
export function logOut() {
  localStorage.removeItem("token", setToCommonHeader);
}
