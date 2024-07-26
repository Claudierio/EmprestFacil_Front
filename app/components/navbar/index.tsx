import React from "react";
import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import navlogoteste from "@/public/logo_nav.png";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import Avatar from "../../../public/avatar_default.png";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.toplevel}>
      <Link href="/">
        <Image src={navlogoteste} alt="navlogo teste" className={styles.logoImg}/>
      </Link>
      <nav className={styles.navbar}>
        <div className={styles.navleft}>
          <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
            <HomeIcon />
            <span>Início</span>
          </Link>

          <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>
            <PersonOutlineOutlinedIcon />
            <span>Quem somos</span>
          </Link>

          <Link href="/emprestimo-usuario" className={`${styles.navLink} ${pathname === '/emprestimo-usuario' ? styles.active : ''}`}>
            <AttachMoneyOutlinedIcon />
            <span>Empréstimo</span>
          </Link>
        </div>

        <div className={styles.navright}>
          <p>Login/</p>
          <p>Register</p>

          {/*<Image
            src={Avatar}
            alt="Avatar"
            width={45}
            height={45}
            className={styles.avatarimg}
          />*/}
          
        </div>
      </nav>
    </div>
  );
}
