'use client';

import React, { useEffect, useState } from "react";
import { listAgiotas } from "@/app/shared/service/api/Auth/authApi"; 
import styles from "./listaAgiota.module.scss";

interface Agiota {
  id: number;
  nome: string;
  taxaJuros: number;
  avaliacao: number; 
}

export default function ListaAgiota() {
  const [agiotas, setAgiotas] = useState<Agiota[]>([]);
  const [erro, setErro] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<string>("");

  useEffect(() => {
    const fetchAgiotas = async () => {
      try {
        const response = await listAgiotas(); 
        setAgiotas(response);
      } catch (error) {
        console.error("Erro ao carregar agiotas:", error);
        setErro("Não foi possível carregar a lista de agiotas.");
      }
    };

    fetchAgiotas();
  }, []);

  const agiotasFiltrados = agiotas.filter((agiota) =>
    agiota.nome.toLowerCase().includes(filtro.toLowerCase())
  ); 

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Agiotas com Taxa e Avaliações</h1>
      
      {erro && <p className={styles.error}>{erro}</p>}

      {/* Barra de pesquisa */}
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Pesquisar por nome..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

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
            {agiotasFiltrados.length > 0 ? ( // Usa a variável filtrada
              agiotasFiltrados.map((agiota) => (
                <tr key={agiota.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>{agiota.nome}</td>
                  <td className={styles.tableCell}>{agiota.taxaJuros.toFixed(2)}%</td> {/* Formata a taxa de juros */}
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


