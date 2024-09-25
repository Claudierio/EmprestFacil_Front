'use client';

import React, { useEffect, useState } from "react";
import { listUser, deleteUser } from "@/app/shared/service/api/Auth/authApi";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "./listaUsuario.module.scss";
import EditUsuarioModal from '@/app/shared/components/EditUsuarioModal/EditUsuarioModal';
import DeleteConfirmationModal from '@/app/shared/components/DeleteConfirmationModal/DeleteConfirmationModal';

interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string; 
  dataNascimento: string;
}

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [erro, setErro] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<string>("");
  const [usuarioParaDeletar, setUsuarioParaDeletar] = useState<number | null>(null);
  const [usuarioEditando, setUsuarioEditando] = useState<Usuario | null>(null);

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

  const handleDelete = async () => {
    if (usuarioParaDeletar !== null) {
      try {
        await deleteUser(usuarioParaDeletar);
        setUsuarios((prev) => prev.filter((usuario) => usuario.id !== usuarioParaDeletar));
        setUsuarioParaDeletar(null);
      } catch (error) {
        console.error("Erro ao deletar usuário:", error);
      }
    }
  };

  const handleUpdate = async () => {
    const response = await listUser(); // Recarregar a lista de usuários após edição
    setUsuarios(response);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Usuários Tomadores de Empréstimos</h1>

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
              <th className={styles.tableHeader}>Usuário</th>
              <th className={styles.tableHeader}>E-mail</th>
              <th className={styles.tableHeader}>Ações</th> 
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.length > 0 ? (
              usuariosFiltrados.map((usuario, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.tableCell}>{usuario.nome}</td>
                  <td className={styles.tableCell}>{usuario.email}</td>
                  <td className={styles.tableCell}>
                    <EditUsuarioModal
                      userId={usuario.id}
                      userNome={usuario.nome}
                      userEmail={usuario.email}
                      userDataNascimento={usuario.dataNascimento}
                      userSenha={usuario.senha}
                      onUpdate={handleUpdate}
                    />
                    <DeleteIcon
                      onClick={() => setUsuarioParaDeletar(usuario.id)}
                      style={{ cursor: "pointer", color: "#d9534f", marginLeft: "10px" }}
                    />
                  </td>
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

      {usuarioParaDeletar !== null && (
        <DeleteConfirmationModal
          onDeleteConfirm={handleDelete}
          onCancel={() => setUsuarioParaDeletar(null)}
        />
      )}
    </div>
  );
}
