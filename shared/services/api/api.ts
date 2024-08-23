import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8081/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };

interface IUserData {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  dataNascimento: string;

}

interface ILoginData {
  email: string;
  senha: string;
}


export const createUser = async (userData: IUserData) => {
  try {
    console.log("Enviando dados do usuário:", userData);
    const response = await api.post(`/usuarios`, userData);
    console.log("Resposta do servidor:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
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
