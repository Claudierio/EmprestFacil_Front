"use client";

import React, { useEffect, useState } from "react";
import styles from "./homepage.module.scss";
import Link from "next/link";
import FrequentHome from "@/app/shared/components/homeFrequent";
import HomeCard2 from "../../shared/components/homeCard2";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = {
      loggedIn: true,
    };

    if (user.loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

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

          {!isLoggedIn && (
            <div className={styles.buttons}>
              <Link href="/login">
                <button className={styles.buttonSign}>Entrar</button>
              </Link>
              <Link href="/register">
                <button className={styles.buttonregister}>Cadastre-se</button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className={styles.customBackground}>
        <FrequentHome />
      </div>
      <HomeCard2 />

      <div className={styles.container}>
        <div className={styles.context}>
          <h1 className={styles.h1}>Não perca tempo! Faça já seu cadastro</h1>
          <p className={styles.textContainer4}>
            Situações inesperadas, como problemas de saúde, reparos de
            emergência em casa ou no carro, podem exigir dinheiro imediato que
            você não tem disponível não perca tempo e fale com a gente.
          </p>
          {!isLoggedIn && (
            <div className={styles.buttons}>
              <Link href="/login">
                <button className={styles.buttonSign}>Entrar</button>
              </Link>
              <Link href="/register">
                <button className={styles.buttonregister}>Cadastre-se</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
