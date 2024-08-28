export interface IUserData {
    nome: string;
    email: string;
    senha: string;
    dataNascimento?: string; // Opcional se não for usado em todos os contextos
}

export interface ILoginData {
    email: string;
    senha: string;
}

export interface IAuthContextData {
    user: IUserData | null;
    token: string | null;
    setUser: (user: IUserData | null) => void;
    setToken: (token: string | null) => void;
}
