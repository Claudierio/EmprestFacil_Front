import React from "react";
import styles from "./homepage.module.scss";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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

      <div className={styles.frequent}>
        <div className={styles.containerfrequent}>
          <h1 className={styles.h1}>Empréstimos mais frequentes</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>Empréstimo de R$1000,00</h2>
              <ul>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Parcelas
                  negociáveis
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Análise rápida
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Privacidade
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> S
                </li>
              </ul>
              <button>Faça já o seu</button>
            </div>
            <div className={styles.card}>
              <h2>Empréstimo de R$5000,00</h2>
              <ul>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Parcelas
                  negociáveis
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Análise rápida
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Privacidade
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> S
                </li>
              </ul>
              <button>Faça já o seu</button>
            </div>
            <div className={styles.card}>
              <h2>Empréstimo de R$10000,00</h2>
              <ul>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Parcelas
                  negociáveis
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Análise rápida
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Privacidade
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> S
                </li>
              </ul>
              <button>Faça já o seu</button>
            </div>
          </div>
        </div>
      </div>

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
