'use client';

import React, { useEffect, useState } from "react";
import { listAgiotas, deleteAgiota } from "@/app/shared/service/api/Auth/authApi";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styles from "./listaAgiota.module.scss";
import EditAgiotaModal from '@/app/shared/components/EditEmprestadorModal/EditAgiotaModal';
import DeleteConfirmationModal from '@/app/shared/components/DeleteConfirmationModal/DeleteConfirmationModal';

interface Agiota {
  id: number;
  nome: string;
  taxaJuros: number;
  avaliacao: number;
  email: string;
}

export default function ListaAgiota() {
  const [agiotas, setAgiotas] = useState<Agiota[]>([]);
  const [erro, setErro] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<string>("");
  const [agiotaParaDeletar, setAgiotaParaDeletar] = useState<number | null>(null);

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

  const handleDelete = async () => {
    if (agiotaParaDeletar !== null) {
      try {
        await deleteAgiota(agiotaParaDeletar);
        setAgiotas((prev) => prev.filter((agiota) => agiota.id !== agiotaParaDeletar));
        setAgiotaParaDeletar(null);
      } catch (error) {
        console.error("Erro ao deletar agiota:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Agiotas com Taxa e Avaliações</h1>

      {erro && <p className={styles.error}>{erro}</p>}

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
              <th className={styles.tableHeader}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {agiotasFiltrados.length > 0 ? (
              agiotasFiltrados.map((agiota) => (
                <tr key={agiota.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>{agiota.nome}</td>
                  <td className={styles.tableCell}>{agiota.taxaJuros.toFixed(2)}%</td>
                  <td className={styles.tableCell}>{agiota.avaliacao} / 5.0</td>
                  <td className={styles.tableCell}>
                    <EditAgiotaModal
                      agiotaId={agiota.id}
                      agiotaNome={agiota.nome}
                      agiotaTaxa={agiota.taxaJuros}
                      agiotaEmail={agiota.email}
                      onUpdate={() => {
                      }}
                    />
                    <DeleteIcon
                      onClick={() => setAgiotaParaDeletar(agiota.id)}
                      style={{ cursor: "pointer", color: "#d9534f", marginLeft: "10px" }}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className={styles.tableCell}>
                  Nenhum agiota encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {agiotaParaDeletar !== null && (
        <DeleteConfirmationModal
          onDeleteConfirm={handleDelete}
          onCancel={() => setAgiotaParaDeletar(null)}
        />
      )}

    </div>
  );
}
