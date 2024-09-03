export interface IUserData {
    id: any;
    nome: string;
    email: string;
    senha: string;
    dataNascimento?: string; 
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