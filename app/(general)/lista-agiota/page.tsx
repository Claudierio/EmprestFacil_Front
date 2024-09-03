'use client';

import React, { useEffect, useState } from "react";
import styles from "./listaAgiota.module.scss";
import { api } from "../../shared/service/api/api"; // Importando a instância configurada do axios

interface Usuario {
  id: number;
  nome: string;
  taxa: string;
  avaliacao: number;
}

export default function ListaAgiota() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await api.get('/agiotas'); // Usando a instância api para fazer a requisição
        setUsuarios(response.data.agiotas); // Ajuste conforme a estrutura real dos dados
      } catch (error) {
        console.error("Erro ao carregar agiotas:", error);
        
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Agiotas com taxa e avaliações</h1>
      {erro && <p className={styles.error}>{erro}</p>}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.table__header}>Agiota</th>
              <th className={styles.table__header}>Taxa de Juros</th>
              <th className={styles.table__header}>Avaliações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map((usuario) => (
                <tr key={usuario.id} className={styles.table__row}>
                  <td className={styles.table__cell}>{usuario.nome}</td>
                  <td className={styles.table__cell}>{usuario.taxa}</td>
                  <td className={styles.table__cell}>{usuario.avaliacao} / 5.0</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className={styles.table__cell}>
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

