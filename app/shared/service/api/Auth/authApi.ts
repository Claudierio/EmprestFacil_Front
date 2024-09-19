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

export const createEmprestimo = async (userData: {
  valorEmprestado: number;
  parcelas: number;
  taxaJuros: number;
  idAgiota: string;  // Adicionando o idAgiota
}) => {
  try {
    // Pegar a data atual para dataEmprestimo
    const dataAtual = new Date();
    // const dataEmprestimo = dataAtual.toISOString().split('T')[0]; // Converter para formato YYYY-MM-DD

    // Calcular a data de vencimento adicionando o número de meses baseado nas parcelas
    const dataVencimentoObj = new Date(dataAtual.setMonth(dataAtual.getMonth() + userData.parcelas));
    const dataVencimento = dataVencimentoObj.toISOString().split('T')[0]; // Formato YYYY-MM-DD

    // Preparar os dados para o envio ao backend
    const emprestimoData = {
      valor: userData.valorEmprestado,
      parcelas: userData.parcelas,
      taxaJuros: userData.taxaJuros,
      agiota_id: userData.idAgiota,  // Incluindo o ID do agiota
      dataVencimento
    };

    // Enviar ao backend
    console.log("Enviando dados: ", emprestimoData); 
    const response = await api.post('/emprestimos', emprestimoData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

