"use client"

import React, { useState } from "react";
import { updateUser } from "@/app/shared/service/api/Auth/authApi";
import styles from "./EditUsuarioModal.module.scss";
import EditIcon from '@mui/icons-material/Edit';

interface EditUsuarioModalProps {
  userId: number;
  userNome: string;
  userEmail: string;
  userDataNascimento: string;
  userSenha: string;
  onUpdate: () => void;
}

const EditUsuarioModal: React.FC<EditUsuarioModalProps> = ({ userId, userNome, userEmail, userDataNascimento, userSenha, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState(userNome);
  const [email, setEmail] = useState(userEmail);
  const [dataNascimento, setDataNascimento] = useState(userDataNascimento);
  const [senha, setSenha] = useState(userSenha);

  const handleEdit = async () => {
    try {
      await updateUser(userId, { nome, email, senha, dataNascimento, role: "CLIENTE" });
      onUpdate(); 
      setShowModal(false); 
    } catch (error) {
      console.error("Erro ao editar usuário:", error);
    }
  };

  return (
    <>
      <EditIcon onClick={() => setShowModal(true)} style={{ cursor: 'pointer', color: '#f5c400' }} />

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className={styles.title}>Editar Usuário</h2>

            <div className={styles.formGroup}>
              <label>Nome:</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={styles.inputField}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Data de Nascimento:</label>
              <input
                type="date"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                className={styles.inputField}
              />
            </div>

            <div className={styles.buttonContainer}>
              <button onClick={handleEdit} className={styles.confirmButton}>Salvar</button>
              <button onClick={() => setShowModal(false)} className={styles.cancelButton}>Cancelar</button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default EditUsuarioModal;
