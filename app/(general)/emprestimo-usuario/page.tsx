import React from "react";
import styles from "./usuarioEmprestimo.module.scss";
import Image from "next/image";
import HomeFrequent from "../../shared/components/homeFrequent";
import moneyImg from "../../../public/dollar.png";
import avatarImag from "../../../public/user-avatar.png";
import listEmprestimos from "../../../public/money-list.png";
import Link from "next/link";
import listImg from "@/public/user1.png";

export default function UsuarioEmprestimo() {
  return (
    <div className={styles.topLevel}>
      <div className={styles.containerUser}>
        <div className={styles.sideMenu}>
          {/* Seção de Solicitar Empréstimo */}
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

          {/* Seção de Listagem de emprestimos */}
          <div className={styles.option}>
            <div className={styles.icon}>
              <Image
                src={listEmprestimos}
                alt="Listagem de Emprestimos"
                width={230}
                height={172}
              />
            </div>
            <div className={styles.text}>
              <h2>Listagem de Emprestimos</h2>
              <p>Visualizar todos os emprestimos cadastrados no sistema</p>
              <Link href="lista-emprestimo">
                <button className={styles.button}>Ver Lista de Emprestimos</button>
              </Link>
            </div>
          </div>

          {/* Seção de Avaliações dos Agiotas */}
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
              <h2>Listagem de Agiotas</h2>
              <p>Visualizar todos os agiotas cadastrados no sistema</p>
              <Link href="lista-agiota">
                <button className={styles.button}>Ver Lista de Agiotas</button>
              </Link>
            </div>
          </div>

          {/* Nova Seção: Listar Usuários */}
          <div className={styles.option}>
            <div className={styles.icon}>
              <Image
                src={listImg}
                alt="Listar Usuários"
                width={230}
                height={172}
              />
            </div>
            <div className={styles.text}>
              <h2>Listar Usuários</h2>
              <p>Visualizar todos os usuários cadastrados no sistema</p>
              <Link href="lista-usuario">
                <button className={styles.button}>Ver Lista de Usuários</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <HomeFrequent />
    </div>
  );
}
