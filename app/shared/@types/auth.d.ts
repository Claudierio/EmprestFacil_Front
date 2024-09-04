interface IUserData {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    dataNascimento: string;
    role: "CLIENTE" | "AGIOTA"; 
  }
export interface ILoginData {
    email: string;
    senha: string;
}

export interface IAuthContextData {
    user: IUserData | null;
    token: string | null;
    setUser: (newUser: IUserData | null) => void;
    setToken: (newToken: string | null) => void;
    logout: () => void;  
}