"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../formStyles.module.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { createUser, loginUser } from "../../shared/service/api/api";
import { useAuthContext } from "../../shared/contexts/Auth/AuthContext";

export default function Register() {
  const router = useRouter();
  const { setUser, setToken } = useAuthContext();
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const newUser = await createUser({
        nome: formData.name,
        email: formData.email,
        senha: formData.password,
        confirmarSenha: formData.password,
        dataNascimento: formData.birthdate,
      });
      const loginData = await loginUser({ email: newUser.email, senha: formData.password });

      setUser(loginData.user);
      setToken(loginData.token);

      router.push("/homepage");
    } catch (error: any) {
      console.error('Erro ao criar a conta:', error);

      if (error.response) {
        console.error('Dados da resposta do servidor:', {
          status: error.response.status,
          data: error.response.data,
          headers: error.response.headers,
        });
      } else if (error.request) {
        console.error('Nenhuma resposta foi recebida:', error.request);
      } else {
        console.error('Erro ao configurar a requisição:', error.message);
      }

      setError('Erro ao criar a conta. Tente novamente.');
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.loginBox}>
          <div className={styles.title}>
            <h1>Registre-se</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <PersonOutlineOutlinedIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  className={styles.input}
                  value={formData.birthdate}
                  onChange={handleChange}
                  required
                />
                <CalendarMonthOutlinedIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <EmailOutlinedIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Senha"
                  className={styles.input}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <LockOutlinedIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirmar Senha"
                  className={styles.input}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <LockOutlinedIcon className={styles.icon} />
              </div>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.registerButton}>
              Próximo
            </button>
          </form>
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
}
