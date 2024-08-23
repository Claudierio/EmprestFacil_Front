"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface IUserData {
    nome: string;
    email: string;
    senha: string;
}

interface IAuthContextData {
    user: IUserData | null;
    token: string | null;
    setUser: (user: IUserData | null) => void;
    setToken: (token: string | null) => void;
}

const AuthContext = createContext({} as IAuthContextData);

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<IUserData | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isVerifying, setIsVerifying] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        if (storedToken) {
            setToken(storedToken);
        }
        setIsVerifying(false);
    }, []);

    const handleSetUser = (newUser: IUserData | null) => {
        setUser(newUser);
        if (newUser) {
            localStorage.setItem("user", JSON.stringify(newUser));
        } else {
            localStorage.removeItem("user");
        }
    };

    const handleSetToken = (newToken: string | null) => {
        setToken(newToken);
        if (newToken) {
            localStorage.setItem("token", newToken);
        } else {
            localStorage.removeItem("token");
        }
    };

    if (isVerifying) {
        return null;
    }

    return (
        <AuthContext.Provider
            value={{ user, token, setUser: handleSetUser, setToken: handleSetToken }}
        >
            {children}
        </AuthContext.Provider>
    );
};
