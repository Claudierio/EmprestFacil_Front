"use client";

import React, { useState, useEffect } from "react";
import styles from "./frequent.module.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

export default function HomeFrequent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Verifica o tamanho da tela inicialmente
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.frequent}>
      <div className={styles.containerfrequent}>
        <h1 className={styles.h1}>Empréstimos mais frequentes</h1>
        {isMobile ? (
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
          >
            <div className={styles.card}>
              <h2>Empréstimo de R$1.000,00</h2>
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
              </ul>
              <Link href="/emprestimo-usuario">
                <button>Faça já o seu</button>
              </Link>
            </div>
            <div className={styles.card}>
              <h2>Empréstimo de R$5.000,00</h2>
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
              </ul>
              <Link href="/emprestimo-usuario">
                <button>Faça já o seu</button>
              </Link>
            </div>
            <div className={styles.card}>
              <h2>Empréstimo de R$10.000,00</h2>
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
              </ul>
              <Link href="/emprestimo-usuario">
                <button>Faça já o seu</button>
              </Link>
            </div>
          </Carousel>
        ) : (
          <div className={styles.cards}>
            <div className={styles.cardDesk}>
              <h2>Empréstimo de R$1.000,00</h2>
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
              </ul>
              <Link href="/emprestimo-usuario">
                <button>Faça já o seu</button>
              </Link>
            </div>
            <div className={styles.cardDesk}>
              <h2>Empréstimo de R$5.000,00</h2>
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
              </ul>
              <Link href="/emprestimo-usuario">
                <button>Faça já o seu</button>
              </Link>
            </div>
            <div className={styles.cardDesk}>
              <h2>Empréstimo de R$10.000,00</h2>
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
              </ul>
              <Link href="/emprestimo-usuario">
                <button>Faça já o seu</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
