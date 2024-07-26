import React from 'react'
import styles from "./solicitaEmprestimo.module.scss"

export default function solicitarEmprestimo(){
  return (
    <div className={styles.toplevel}>
        <div className={styles.container}>
            <h1>Solicitar Empréstimo</h1>
            <button className={styles.button}>Solicitar Emprestimo</button>
        </div>
    </div>
  )
}

