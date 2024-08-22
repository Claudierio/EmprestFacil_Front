import React from "react";
import styles from "./listaUsuario.module.scss";


export default function listaUsuarios() {
  // Dados de exemplo dos usuários tomadores de empréstimos
  const usuarios = [
    { nome: "Lucas Lima", valor: "R$ 500,00", status: "Pago" },
    { nome: "Mariana Souza", valor: "R$ 1.200,00", status: "Em Aberto" },
    { nome: "Roberto Silva", valor: "R$ 2.500,00", status: "Pago" },
    { nome: "Ana Costa", valor: "R$ 800,00", status: "Em Aberto" },
    { nome: "José Almeida", valor: "R$ 3.000,00", status: "Pago" },
    { nome: "Lucas Lima", valor: "R$ 500,00", status: "Pago" },
    { nome: "Mariana Souza", valor: "R$ 1.200,00", status: "Em Aberto" },
    { nome: "Roberto Silva", valor: "R$ 2.500,00", status: "Pago" },
    { nome: "Ana Costa", valor: "R$ 800,00", status: "Em Aberto" },
    { nome: "José Almeida", valor: "R$ 3.000,00", status: "Pago" },
    { nome: "Lucas Lima", valor: "R$ 500,00", status: "Pago" },
    { nome: "Mariana Souza", valor: "R$ 1.200,00", status: "Em Aberto" },
    { nome: "Roberto Silva", valor: "R$ 2.500,00", status: "Pago" },
    { nome: "Ana Costa", valor: "R$ 800,00", status: "Em Aberto" },
    { nome: "José Almeida", valor: "R$ 3.000,00", status: "Pago" },
    // Adicione mais usuários conforme necessário
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Usuários Tomadores de Empréstimos</h1>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.table__header}>Usuário</th>
              <th className={styles.table__header}>Valor do Empréstimo</th>
              <th className={styles.table__header}>Status</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index} className={styles.table__row}>
                <td className={styles.table__cell}>{usuario.nome}</td>
                <td className={styles.table__cell}>{usuario.valor}</td>
                <td className={styles.table__cell}>{usuario.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
