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

export const updateUser = async (userId: number, updatedData: IUserData) => {
  try {
    const response = await api.put(`/usuarios/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId: number) => {
  try {
    const response = await api.delete(`/usuarios/${userId}`);
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

export const updateAgiota = async (agiotaId: number, updatedData: { nome: string; taxaJuros: number, email: string }) => {
  try {
    const response = await api.put(`/agiotas/${agiotaId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAgiota = async (agiotaId: number) => {
  try {
    const response = await api.delete(`/agiotas/${agiotaId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createEmprestimo = async (userData: {
  valorEmprestado: number;
  parcelas: number;
  taxaJuros: number;
  idAgiota: string; 
  idUsuario: number; 
}) => {
  try {
    const dataAtual = new Date();

    const dataVencimentoObj = new Date(dataAtual.setMonth(dataAtual.getMonth() + userData.parcelas));
    const dataVencimento = dataVencimentoObj.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    const dataEmprestimo = dataAtual.toISOString().split('T')[0]; 
    const emprestimoData = {
      dataEmprestimo,
      valorEmprestado: userData.valorEmprestado,
      parcelas: userData.parcelas,
      taxaJuros: userData.taxaJuros,
      agiota: userData.idAgiota,  
      usuario: userData.idUsuario,  

      dataVencimento
    };

    console.log("Enviando dados: ", emprestimoData); 
    const response = await api.post('/emprestimos', emprestimoData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listEmprestimos = async () => {
  try {
    const response = await api.get('/emprestimos');
    return response.data; 
  } catch (error) {
    throw error;
  }
};

