import React from "react";
import styles from "./homepage.module.scss";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FrequentHome from "../../components/homeFrequent"
import HomeCard2 from "../../components/homeCard2"

export default function HomePage() {
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
          <div className={styles.buttons}>
            <button className={styles.buttonSign}>Entrar</button>
            <button className={styles.buttonregister}>Cadastre-se</button>
          </div>
        </div>
      </div>

      <FrequentHome />
      <HomeCard2 />

      <div className={styles.container}>
        <div className={styles.context}>
          <h1 className={styles.h1}>Não perca tempo! Faça já seu cadastro</h1>
          <p className={styles.textContainer4}>
            Situações inesperadas, como problemas de saúde, reparos de
            emergência em casa ou no carro, podem exigir dinheiro imediato que
            você não tem disponível não perca tempo e fale com a gente.
          </p>
          <div className={styles.buttons}>
            <button className={styles.buttonSign}>Entrar</button>
            <button className={styles.buttonregister}>Cadastre-se</button>
          </div>
        </div>
      </div>
    </div>
  );
}
