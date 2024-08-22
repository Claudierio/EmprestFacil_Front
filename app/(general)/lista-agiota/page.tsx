import React from "react";
import styles from "./listaAgiota.module.scss";

export default function listaAgiota() {
  // Dados de exemplo dos usuários, taxas de juros e avaliações
  const usuarios = [
    { nome: "João Silva", taxa: "2.5%", avaliacao: 4.5 },
    { nome: "Maria Oliveira", taxa: "3.1%", avaliacao: 4.7 },
    { nome: "Carlos Souza", taxa: "1.9%", avaliacao: 4.3 },
    { nome: "Ana Pereira", taxa: "2.8%", avaliacao: 4.6 },
    { nome: "João Silva", taxa: "2.5%", avaliacao: 4.5 },
    { nome: "Maria Oliveira", taxa: "3.1%", avaliacao: 4.7 },
    { nome: "Carlos Souza", taxa: "1.9%", avaliacao: 4.3 },
    { nome: "Ana Pereira", taxa: "2.8%", avaliacao: 4.6 },
    { nome: "João Silva", taxa: "2.5%", avaliacao: 4.5 },
    { nome: "Maria Oliveira", taxa: "3.1%", avaliacao: 4.7 },
    { nome: "Carlos Souza", taxa: "1.9%", avaliacao: 4.3 },
    { nome: "Ana Pereira", taxa: "2.8%", avaliacao: 4.6 },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Agiotas com taxa e avaliações</h1>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.table__header}>Agiota</th>
              <th className={styles.table__header}>Taxa de Juros</th>
              <th className={styles.table__header}>avaliações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index} className={styles.table__row}>
                <td className={styles.table__cell}>{usuario.nome}</td>
                <td className={styles.table__cell}>{usuario.taxa}</td>
                <td className={styles.table__cell}>{usuario.avaliacao} / 5.0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

