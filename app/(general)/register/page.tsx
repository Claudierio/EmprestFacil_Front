"use client";

import React from "react";
import styles from "../formStyles.module.scss";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.loginBox}>
          <h1>Registre-se</h1>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Nome</label>
              <div className={styles.inputWrapper}>
                <input type="text" id="name" name="name" className={styles.input} required />
                <PersonOutlineOutlinedIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="birthdate" className={styles.label}>Nascimento</label>
              <div className={styles.inputWrapper}>
                <input type="date" id="birthdate" name="birthdate" className={styles.input} required />
                <CalendarMonthOutlinedIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <div className={styles.inputWrapper}>
                <input type="email" id="email" name="email" className={styles.input} required />
                <EmailOutlinedIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Senha</label>
              <div className={styles.inputWrapper}>
                <input type="password" id="password" name="password" className={styles.input} required />
                <LockOutlinedIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>Confirmar Senha</label>
              <div className={styles.inputWrapper}>
                <input type="password" id="confirmPassword" name="confirmPassword" className={styles.input} required />
                <LockOutlinedIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="role" className={styles.label}>Você é:</label>
              <select id="role" name="role" className={styles.input} required>
                <option value="agiota">Agiota</option>
                <option value="devedor">Devedor</option>
              </select>
            </div>
            <button type="submit" className={styles.loginButton}>Registrar</button>
          </form>
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
}
