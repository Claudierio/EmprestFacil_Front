'use client';

import React, { useEffect, useState } from "react";
import styles from "./listaUsuario.module.scss";
import { listUser } from "@/app/shared/service/api/Auth/authApi";

interface Usuario {
  nome: string;
  email: string;
}

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [erro, setErro] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<string>("");

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

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Usuários Tomadores de Empréstimos</h1>

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
              <th className={styles.tableHeader}>Usuário</th>
              <th className={styles.tableHeader}>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.length > 0 ? (
              usuariosFiltrados.map((usuario, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.tableCell}>{usuario.nome}</td>
                  <td className={styles.tableCell}>{usuario.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className={styles.tableCell}>
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


