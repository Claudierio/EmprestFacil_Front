"use client";

import React from "react";
import styles from "../formStyles.module.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Adicione esta linha para importar o ícone de seta
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.loginBox}>
          <div className={styles.title}>
            <h1>Registre-se</h1>
          </div>
          <form>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome"
                  className={styles.input}
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
                  required
                />
                <LockOutlinedIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.selectWrapper}>
                <select
                  id="role"
                  name="role"
                  className={styles.selection}
                  required
                >
                  <option value="" disabled selected>
                    Você é:
                  </option>
                  <option value="agiota">Agiota</option>
                  <option value="devedor">Devedor</option>
                </select>
                <ArrowDropDownIcon className={styles.icon} />
              </div>
            </div>
            <button type="submit" className={styles.registerButton} >
              Proximo
            </button>
          </form>
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
}
