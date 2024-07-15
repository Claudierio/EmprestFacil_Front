import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import navlogoteste from "@/public/navlogoteste.png";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

export default function Navbar() {
  return (
    <div className={styles.toplevel}>
      <Link href="/">
        <Image src={navlogoteste} alt="navlogo teste" className={styles.logoImg}/>
      </Link>
      <nav className={styles.navbar}>
        <div className={styles.navleft}>
          <Link className={styles.navLink} href="/">
            <HomeIcon />
            <span>Início</span>
          </Link>

          <Link className={styles.navLink} href="/quem-somos">
            <PersonOutlineOutlinedIcon />
            <span>Quem somos</span>
          </Link>

          <Link className={styles.navLink} href="/emprestimo">
            <AttachMoneyOutlinedIcon />
            <span>Empréstimo</span>
          </Link>
        </div>

        <div className={styles.navright}>
          <p>Nome do usuário</p>
          <Image
            src={""}
            alt="Avatar"
            width={45}
            height={45}
            className={styles.avatarimg}
          />
        </div>
      </nav>
    </div>
  );
}
