"use client"

import React, { useState, useEffect } from "react";
import styles from "./frequent.module.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";

export default function HomeFrequent() {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div className={styles.frequent}>
      <div className={styles.containerfrequent}>
        <h1 className={styles.h1}>Empréstimos mais frequentes</h1>
        {isMobile ? (
          <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
            <div className={styles.card}>
              <h2>Empréstimo de R$1000,00</h2>
              <ul>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Parcelas negociáveis
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Análise rápida
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Privacidade
                </li>
              </ul>
              <button>Faça já o seu</button>
            </div>
            <div className={styles.card}>
              <h2>Empréstimo de R$5000,00</h2>
              <ul>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Parcelas negociáveis
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Análise rápida
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Privacidade
                </li>
              </ul>
              <button>Faça já o seu</button>
            </div>
            <div className={styles.card}>
              <h2>Empréstimo de R$10000,00</h2>
              <ul>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Parcelas negociáveis
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Análise rápida
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Privacidade
                </li>
              </ul>
              <button>Faça já o seu</button>
            </div>
          </Carousel>
        ) : (
          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>Empréstimo de R$1000,00</h2>
              <ul>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Parcelas negociáveis
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Análise rápida
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Privacidade
                </li>
              </ul>
              <button>Faça já o seu</button>
            </div>
            <div className={styles.card}>
              <h2>Empréstimo de R$5000,00</h2>
              <ul>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Parcelas negociáveis
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Análise rápida
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Privacidade
                </li>
              </ul>
              <button>Faça já o seu</button>
            </div>
            <div className={styles.card}>
              <h2>Empréstimo de R$10000,00</h2>
              <ul>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Parcelas negociáveis
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Análise rápida
                </li>
                <li>
                  <CheckCircleIcon className={styles.icon} /> Privacidade
                </li>
              </ul>
              <button>Faça já o seu</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
