import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import logoSite from "@/public/logo_nav.png"

export default function Footer() {
  return (
    <footer className={styles.toplevel}>
      <Image src={logoSite} alt="logo" className={styles.logoImg} />
      <nav className={styles.navFooter}>
        <a href="/homepage">Página Inicial</a>
        <a href="#">Quem somos</a>
        <a href="#">Emprestimo</a>
        <a href="#">Perguntas Frequentes</a>
      </nav>
      <div className={styles.addressSection}>
        <p>Endereço: Av. Bom Pastor, s/n - Boa Vista, Garanhuns - PE</p>
        <p>Fundação: 11 de abril de 2018</p>
        <p>Telefone: (87) 3764-5505</p>
      </div>
      <p className={styles.copyright}>
        Copyright 2024 &copy; EmprestFacil.
      </p>
    </footer>
  );
}
