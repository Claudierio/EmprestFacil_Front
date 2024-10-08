"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import navlogoteste from "@/public/logo_nav.png";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { useAuthContext } from "@/app/shared/contexts/Auth/AuthContext";
import AuthStatus from "../authStatus";

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuthContext();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleProfileClick = () => {
    setDropdownVisible(false);
  };

  return (
    <div className={styles.toplevel}>
      <Link href="/">
        <Image
          src={navlogoteste}
          alt="navlogo teste"
          className={styles.logoImg}
        />
      </Link>
      <nav className={styles.navbar}>
        <div className={styles.navleft}>
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
          >
            <HomeIcon />
            <span>Início</span>
          </Link>

          <Link
            href="/about"
            className={`${styles.navLink} ${pathname === "/about" ? styles.active : ""}`}
          >
            <PersonOutlineOutlinedIcon />
            <span>Quem somos</span>
          </Link>

          <Link
            href="/emprestimo-usuario"
            className={`${styles.navLink} ${pathname === "/emprestimo-usuario" ? styles.active : ""}`}
          >
            <AttachMoneyOutlinedIcon />
            <span>Empréstimo</span>
          </Link>

          <AuthStatus />
        </div>

        <div className={styles.navright}>
          {user ? (
            <div className={styles.userMenu}>
              <p onClick={toggleDropdown} className={styles.userName}>
                Olá, {user.nome}
              </p>
              {dropdownVisible && (
                <div ref={dropdownRef} className={styles.dropdown}>
                  <Link href="/profile" onClick={handleProfileClick}>
                    <div className={styles.dropdownItem}>
                      <p>Perfil</p>
                    </div>
                  </Link>
                  <div className={styles.dropdownItem} onClick={handleLogout}>
                    <p>Sair</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.buttons}>
              <Link href="/login">
                <button className={styles.buttonSign}>Entrar</button>
              </Link>
              <Link href="/register">
                <button className={styles.buttonregister}>Cadastre-se</button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
