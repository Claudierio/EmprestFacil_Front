'use client';

import React, { useEffect, useState } from "react";
import styles from "./listaUsuario.module.scss";
import { listUser } from "../../shared/service/api/api"; 

interface Usuario {
  nome: string;
  valor: string;
  status: string;
}

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await listUser();
        setUsuarios(response);
      } catch (error) {
        setErro("Erro ao carregar usuários.");
        console.error("Erro ao carregar usuários:", error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Usuários Tomadores de Empréstimos</h1>
      {erro && <p className={styles.error}>{erro}</p>}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Usuário</th>
              <th className={styles.tableHeader}>Valor do Empréstimo</th>
              <th className={styles.tableHeader}>Status</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map((usuario, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.tableCell}>{usuario.nome}</td>
                  <td className={styles.tableCell}>{usuario.valor}</td>
                  <td className={styles.tableCell}>{usuario.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className={styles.tableCell}>
                  Nenhum usuário encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
