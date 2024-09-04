import { ILoginData, IUserData } from "@/app/shared/@types/auth";
import { api } from "../api";

export const createUser = async (userData: IUserData) => {
  try {
    const response = await api.post(`/usuarios`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData: ILoginData) => {
  try {
    const response = await api.post(`/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listUser = async () => {
  try {
    const response = await api.get('/usuarios');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listAgiotas = async () => {
  try {
    const response = await api.get('/agiotas');
    return response.data; 
  } catch (error) {
    throw error;
  }
};

