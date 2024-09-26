interface IUserData {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    dataNascimento: string;
    role: "CLIENTE" | "AGIOTA" |"ADMIN"; 
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

export interface IAgiota {
    id: number;
    nome: string;
    taxaJuros: number;
  }

  export interface IAgiotaEmprestimo {
    id: string;  
    nome: string;
    taxaJuros: number;
  }
  
  export interface IUsuario {
    id: number;
    nome: string;
  }
  
  export interface IEmprestimo {
    id: number;
    valor: number;
    parcelas: number;
    agiota: Agiota | null;
    usuario: Usuario | null;
    dataEmprestimo: string;   
    dataVencimento: string;
  }