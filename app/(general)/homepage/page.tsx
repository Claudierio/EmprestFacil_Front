import React from 'react';
import styles from './homepage.module.scss';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import navlogoteste from "@/public/navlogoteste.png";
import NavBar from "../../components/navbar/index"

export default function homepage(){
  return (
    <div className={styles.container}>
        <NavBar />
        <div>
          <h1>Página da homepage</h1>
        </div>
    </div>
  )
}
