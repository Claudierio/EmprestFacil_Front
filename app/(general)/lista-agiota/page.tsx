'use client';

import React, { useEffect, useState } from "react";
import { listAgiotas } from "../../shared/service/api/api";
import styles from "./listaAgiota.module.scss";

interface Agiota {
  id: number;
  nome: string;
  taxa: string;
  avaliacao: number;
}

export default function ListaAgiota() {
  const [agiotas, setAgiotas] = useState<Agiota[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgiotas = async () => {
      try {
        const response = await listAgiotas();
        setAgiotas(response); // Atualiza a lista de agiotas com a resposta do backend
      } catch (error) {
        console.error("Erro ao carregar agiotas:", error);
        setErro("Não foi possível carregar a lista de agiotas.");
      }
    };

    fetchAgiotas();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Agiotas com Taxa e Avaliações</h1>
      {erro && <p className={styles.error}>{erro}</p>}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Agiota</th>
              <th className={styles.tableHeader}>Taxa de Juros</th>
              <th className={styles.tableHeader}>Avaliações</th>
            </tr>
          </thead>
          <tbody>
            {agiotas.length > 0 ? (
              agiotas.map((agiota) => (
                <tr key={agiota.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>{agiota.nome}</td>
                  <td className={styles.tableCell}>{agiota.taxa}</td>
                  <td className={styles.tableCell}>{agiota.avaliacao} / 5.0</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className={styles.tableCell}>
                  Nenhum agiota encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


