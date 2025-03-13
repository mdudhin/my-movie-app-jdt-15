import axiosWithConfig from "../api";
import { LoginType } from "./type";

export const postLogin = async (payload: LoginType) => {
  try {
    const response = await axiosWithConfig.post("auth/login", payload);
    return response.data;
  } catch (error) {}
};
