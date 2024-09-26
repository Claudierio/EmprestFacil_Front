import { IEmprestimo, ILoginData, IUserData } from "@/app/shared/@types/auth";
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

export const listUsersByAgiota = async (agiotaId: number) => {
  try {
    
    const emprestimosResponse = await api.get(`/emprestimos?agiotaId=${agiotaId}`);

    if (emprestimosResponse.status !== 200) {
      throw new Error(`Erro ao buscar empréstimos: ${emprestimosResponse.statusText}`);
    }

    const emprestimos = emprestimosResponse.data;
    const userIds = emprestimos.map((emprestimo: any) => emprestimo.usuarioId);
    const usersResponse = await api.get(`/usuarios?ids=${userIds.join(",")}`);

    if (usersResponse.status !== 200) {
      throw new Error(`Erro ao buscar usuários: ${usersResponse.statusText}`);
    }

    return usersResponse.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};


export const getAgiotaById = async (agiotaId: number) => {
  try {
    const response = await api.get(`/agiotas/${agiotaId}`);
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
    
    const dataEmprestimo = new Date(
      dataAtual.getTime() + (24 * 60 * 60 * 1000) - (dataAtual.getTimezoneOffset() * 60000)
    ).toISOString().split('T')[0];
    
    const dataVencimentoObj = new Date(dataAtual);
    dataVencimentoObj.setMonth(dataVencimentoObj.getMonth() + userData.parcelas);
    const dataVencimento = dataVencimentoObj.toISOString().split('T')[0]; // Formato YYYY-MM-DD

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


export const listEmprestimosFiltrados = async (
  id: number | null = null, 
  tipoFiltro: 'CLIENTE' | 'AGIOTA' | null = null
) => {
  try {
    const response = await api.get('/emprestimos'); 
    const emprestimos = response.data;

    const emprestimosFiltrados = emprestimos.filter((emprestimo: IEmprestimo) => {
      if (tipoFiltro === 'CLIENTE' && id) {
        return emprestimo.usuario.id === id;
      } else if (tipoFiltro === 'AGIOTA' && id) {
        return emprestimo.agiota.id === id;
      }
      return false;
    });

    return emprestimosFiltrados;
  } catch (error) {
    console.error("Erro ao buscar empréstimos filtrados:", error);
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


export const getUserRoles = async (): Promise<"CLIENTE" | "AGIOTA"> => {
  try {
    const response = await api.get('/usuarios'); 
    return response.data.role; 
  } catch (error) {
    throw error;
  }
};
