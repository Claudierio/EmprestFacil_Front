import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import logoSite from "../../../public/logo_nav.png";

export default function inde() {
  return (
    <footer className={styles.toplevel}>
      <Image src={logoSite} alt="logo " className={styles.logoImg} />
      <nav className={styles.navFooter}>
        <a href="#">Página Inicial</a>
        <a href="#">Quem somos</a>
        <a href="#">Emprestimo</a>
        <a href="#">Endereço</a>
        <a href="#">Perguntas Frequentes</a>
      </nav>
      <p className={styles.footerDisney}>
        Endereço: Av. Bom Pastor, s/n - Boa Vista, Garanhuns - PE<br/>
        Fundação: 11 de abril de 2018 <br/>
        Telefone: (87) 3764-5505 
      </p>

      <p className={styles.footerDisney}>Copyright 2024 &copy; EmprestFacil.</p>
    </footer>
  );
}
