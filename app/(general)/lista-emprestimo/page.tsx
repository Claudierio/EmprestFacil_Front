"use client";
import React, { useEffect, useState } from "react";
import { listEmprestimos } from "@/app/shared/service/api/Auth/authApi";
import styles from "./listaEmprestimo.module.scss";
import { IEmprestimo } from "@/app/shared/@types/auth";
export default function ListaEmprestimos() {
  const [emprestimos, setEmprestimos] = useState<IEmprestimo[]>([]);
  const [erro, setErro] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<string>("");
  useEffect(() => {
    const fetchEmprestimos = async () => {
      try {
        const response = await listEmprestimos();
        setEmprestimos(response);
      } catch (error) {
        console.error("Erro ao carregar empréstimos:", error);
        setErro("Não foi possível carregar a lista de empréstimos.");
      }
    };
    fetchEmprestimos();
  }, []);
  const emprestimosFiltrados = emprestimos.filter((emprestimo) => {
    const agiotaNome = emprestimo.agiota?.nome || "";
    const usuarioNome = emprestimo.usuario?.nome || "";
    return (
      agiotaNome.toLowerCase().includes(filtro.toLowerCase()) ||
      usuarioNome.toLowerCase().includes(filtro.toLowerCase())
    );
  });
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Empréstimos</h1>
      {erro && <p className={styles.error}>{erro}</p>}
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Pesquisar por agiota ou usuário..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Agiota</th>
              <th className={styles.tableHeader}>Usuário</th>
              <th className={styles.tableHeader}>Valor</th>
              <th className={styles.tableHeader}>Parcelas</th>
            </tr>
          </thead>
          <tbody>
            {emprestimosFiltrados.length > 0 ? (
              emprestimosFiltrados.map((emprestimo) => (
                <tr key={emprestimo.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>
                    {emprestimo.agiota?.nome || "Desconhecido"}
                  </td>
                  <td className={styles.tableCell}>
                    {emprestimo.usuario?.nome || "Desconhecido"}
                  </td>
                  <td className={styles.tableCell}>
                    {emprestimo.valor.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                  <td className={styles.tableCell}>{emprestimo.parcelas}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className={styles.tableCell}>
                  Nenhum empréstimo encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}