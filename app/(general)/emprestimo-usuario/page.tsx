import React from "react";
import styles from "./usuarioEmprestimo.module.scss";
import Image from "next/image";
import HomeFrequent from "../../shared/components/homeFrequent";
import moneyImg from "../../../public/dollar.png";
import avatarImag from "../../../public/user-avatar.png";
import Link from "next/link";

export default function UsuarioEmprestimo() {
  return (
    <div className={styles.topLevel}>
      <div className={styles.containerUser}>
        <div className={styles.sideMenu}>
          <div className={styles.option}>
            <div className={styles.icon}>
              <Image
                src={moneyImg}
                alt="Solicitar empréstimo"
                width={230}
                height={172}
              />
            </div>
            <div className={styles.text}>
              <h2>Solicitar empréstimo</h2>
              <p>
                Realizar empréstimo rápido e fácil, com apenas alguns clicks
              </p>
              <Link href="solicitar-emprestimo">
                <button className={styles.button}>Realizar Empréstimo</button>
              </Link>
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.icon}>
              <Image
                src={avatarImag}
                alt="Avaliações dos agiotas"
                width={230}
                height={172}
              />
            </div>
            <div className={styles.text}>
              <h2>Avaliações dos agiotas</h2>
              <p>Exibir avaliações da lista de agiotas</p>
              <Link href="lista-agiota">
                <button className={styles.button}>Buscar agiota</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <HomeFrequent />
    </div>
  );
}
