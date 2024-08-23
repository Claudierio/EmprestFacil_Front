import React from "react";
import styles from "./homeCard2.module.scss";
import Image from "next/image";
import image1 from "@/public/money1.jpg";
import image2 from "@/public/money2.jpg";

export default function homecard() {
  return (
    <div className={styles.toplevel}>
      <div className={styles.container}>
        <div className={styles.leftcontent}>
          <Image src={image1} alt="money2" className={styles.img} />
          <h3 className={styles.h3}>Dinheiro na mão</h3>
          <p className={styles.paragraph}>
            Você pode usar o dinheiro imediatamente para qualquer necessidade ou
            oportunidade que surja.
          </p>
        </div>
        <div className={styles.rightcontent}>
          <Image src={image2} alt="money2" className={styles.img} />
          <h3 className={styles.h3}>Não perca tempo</h3>
          <p className={styles.paragraph}>
            Empréstimos podem resolver problemas imediatos, mas podem criar
            oportunidades.
          </p>
        </div>
      </div>
    </div>
  );
}
