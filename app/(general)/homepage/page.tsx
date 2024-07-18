import React from 'react';
import styles from './homepage.module.scss';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import navlogoteste from "@/public/navlogoteste.png";

export default function homepage(){
  return (
    <div className={styles.container}>
        <div>
          <h1>Página da homepage</h1>
        </div>
    </div>
  )
}
