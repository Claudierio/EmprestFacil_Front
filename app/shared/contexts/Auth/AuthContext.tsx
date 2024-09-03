"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IAuthContextData, IUserData } from "@/app/shared/@types/auth";
import { useRouter } from "next/navigation";

const AuthContext = createContext({} as IAuthContextData);

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<IUserData | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isVerifying, setIsVerifying] = useState(true);
    const router = useRouter();

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

    const logout = () => {
        handleSetUser(null);
        handleSetToken(null);
        router.push('/');
    };

    if (isVerifying) {
        return null;
    }

    return (
        <AuthContext.Provider
            value={{ user, token, setUser: handleSetUser, setToken: handleSetToken, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
