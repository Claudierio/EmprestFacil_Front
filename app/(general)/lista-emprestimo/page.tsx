"use client";
import React, { useEffect, useState } from "react";
import { listEmprestimos, listEmprestimosFiltrados } from "@/app/shared/service/api/Auth/authApi";
import styles from "./listaEmprestimo.module.scss";
import { IEmprestimo } from "@/app/shared/@types/auth";
import NotaFiscalModal from "@/app/shared/components/notaFiscal/NotaFiscalModal";
import { useAuthContext } from "@/app/shared/contexts/Auth/AuthContext";

export default function ListaEmprestimos() {
  const [emprestimos, setEmprestimos] = useState<IEmprestimo[]>([]);
  const [erro, setErro] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedEmprestimo, setSelectedEmprestimo] = useState<IEmprestimo | null>(null);
  const { user } = useAuthContext();
  const tipoFiltro = user?.role === "AGIOTA" ? 'AGIOTA' : 'CLIENTE';
  useEffect(() => {
    const fetchEmprestimos = async () => {
      if (user?.role === "ADMIN") {
        try {
          const response = await listEmprestimos();
          setEmprestimos(response);
        } catch (error) {
          console.error("Erro ao carregar empréstimos:", error);
          setErro("Não foi possível carregar a lista de empréstimos.");
        }
      } else if (user?.role === "CLIENTE") {
        try {
          const response = await listEmprestimosFiltrados(user?.id!, tipoFiltro);
          setEmprestimos(response);
          console.log(response);
        } catch (error) {
          console.error("Erro ao carregar empréstimos:", error);
          setErro("Não foi possível carregar a lista de empréstimos.");
        }
      } else if (user?.role === "AGIOTA") {
        try {
          const response = await listEmprestimosFiltrados(user?.id!, tipoFiltro);
          setEmprestimos(response);
          console.log(response);
        } catch (error) {
          console.error("Erro ao carregar empréstimos:", error);
          setErro("Não foi possível carregar a lista de empréstimos.");
        }
      }
    }
    fetchEmprestimos();
  }, []);

  const openModal = (emprestimo: IEmprestimo) => {
    setSelectedEmprestimo(emprestimo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEmprestimo(null);
  };

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
              <th className={styles.tableHeader}>Valor Total</th>
            </tr>
          </thead>
          <tbody>
            {emprestimosFiltrados.length > 0 ? (
              emprestimosFiltrados.map((emprestimo) => {
                const valorTotal =
                  emprestimo.valor +
                  emprestimo.valor * (emprestimo.agiota?.taxaJuros / 100);

                return (
                  <tr
                    key={emprestimo.id}
                    className={styles.tableRow}
                    onClick={() => openModal(emprestimo)}
                  >
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
                    <td className={styles.tableCell}>
                      {valorTotal.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} className={styles.tableCell}>
                  Nenhum empréstimo encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <NotaFiscalModal
        isOpen={modalOpen}
        onClose={closeModal}
        emprestimo={selectedEmprestimo}
      />
    </div>
  );
}
