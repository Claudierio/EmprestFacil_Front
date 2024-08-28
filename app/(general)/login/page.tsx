// login.tsx
"use client";

import React, { useState } from "react";
import styles from "../formStyles.module.scss";
import Link from "next/link";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { api } from "../../shared/service/api/api"; // Import corrigido
import { useRouter } from 'next/navigation';
import { useAuthContext } from "@/app/shared/contexts/Auth/AuthContext";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { setUser, setToken } = useAuthContext();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    try {
      const response = await api.post('/login', {
        email,
        senha
      });

      const usuario = response.data;
      setUser(usuario);
      setToken(usuario.token);
      router.push('/homepage');
    } catch (error) {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.loginBox}>
          <div className={styles.title}>
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <PersonOutlineOutlinedIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    className={styles.input}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                  <LockOutlinedIcon className={styles.icon} />
                </div>
              </div>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.loginButton}>
              Entrar
            </button>
          </form>
          <div className={styles.parentContainer}>
            <span className={styles.loginContainer}>
              Novo por aqui?{" "}
              <Link className={styles.loginLink} href="/register">
                <span>Registre-se</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
}
