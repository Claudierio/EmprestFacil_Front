"use client";

import React, { useEffect, useState } from "react";
import styles from "./homepage.module.scss";
import Link from "next/link";
import FrequentHome from "@/app/shared/components/homeFrequent";
import HomeCard2 from "../../shared/components/homeCard2";
import { useAuthContext } from "@/app/shared/contexts/Auth/AuthContext";

export default function HomePage() {
  const { user } = useAuthContext();

  return (
    <div className={styles.toplevel}>
      <div className={styles.container}>
        <div className={styles.context}>
          <h1 className={styles.h1}>
            Seja bem-vindo ao <span className={styles.leftH1}>Emprest</span>
            <span className={styles.righth1}>Fácil</span>
          </h1>
          <p className={styles.text}>
            A melhor plataforma de empréstimos para você
          </p>
          {!user && (
            <div className={styles.buttons}>
              <Link href="/login">
                <button className={styles.buttonSign}>Entrar</button>
              </Link>
              <Link href="/register">
                <button className={styles.buttonregister}>Cadastre-se</button>
              </Link>
            </div>
          )}
          {user && (
            <div className={styles.buttons}>
              <Link href="/emprestimo-usuario">
                <button className={styles.buttonSign}>Empréstimos</button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className={styles.customBackground}>
        <FrequentHome />
      </div>
      <HomeCard2 />

      {!user && (
        <div className={styles.container}>
          <div className={styles.context}>
            <h1 className={styles.h1}>Não perca tempo! Faça já seu cadastro</h1>
            <p className={styles.textContainer4}>
              Situações inesperadas, como problemas de saúde, reparos de
              emergência em casa ou no carro, podem exigir dinheiro imediato que
              você não tem disponível não perca tempo e fale com a gente.
            </p>
            <div className={styles.buttons}>
              <Link href="/login">
                <button className={styles.buttonSign}>Entrar</button>
              </Link>
              <Link href="/register">
                <button className={styles.buttonregister}>Cadastre-se</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
