"use client";

import React from "react";
import styles from "../formStyles.module.scss";
import Link from "next/link";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.loginBox}>
          <h1>Login</h1>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="username" className={styles.label}>Usuário</label>
              <div className={styles.inputWrapper}>
                <input type="text" id="username" name="username" className={styles.input} required />
                <PersonOutlineOutlinedIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Senha</label>
              <div className={styles.inputWrapper}>
                <input type="password" id="password" name="password" className={styles.input} required />
                <LockOutlinedIcon className={styles.icon} />
              </div>
            </div>
            <button type="submit" className={styles.loginButton}>Entrar</button>
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
