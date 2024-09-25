"use client"

import React, { useState } from "react";
import { updateAgiota } from "@/app/shared/service/api/Auth/authApi";
import styles from "./EditAgiotaModal.module.scss";
import EditIcon from '@mui/icons-material/Edit';

interface EditAgiotaModalProps {
  agiotaId: number;
  agiotaNome: string;
  agiotaTaxa: number;
  agiotaEmail: string; 
  onUpdate: () => void;
}

const EditAgiotaModal: React.FC<EditAgiotaModalProps> = ({ agiotaId, agiotaNome, agiotaTaxa, agiotaEmail, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState(agiotaNome);
  const [taxaJuros, setTaxaJuros] = useState(agiotaTaxa);
  const [email, setEmail] = useState(agiotaEmail); 

  const handleEdit = async () => {
    try {
      await updateAgiota(agiotaId, { nome, taxaJuros, email }); 
      onUpdate(); 
      setShowModal(false); 
    } catch (error) {
      console.error("Erro ao editar agiota:", error);
    }
  };

  return (
    <>
      <EditIcon onClick={() => setShowModal(true)} style={{ cursor: 'pointer', color: '#f5c400' }} />

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className={styles.title}>Editar Agiota</h2>

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
              <label>Taxa de Juros:</label>
              <input
                type="number"
                value={taxaJuros}
                onChange={(e) => setTaxaJuros(parseFloat(e.target.value))}
                className={styles.inputField}
              />
            </div>

            <div className={styles.buttonContainer}>
  <button onClick={handleEdit} className={styles.confirmButton}>Sim</button>
  <button onClick={() => setShowModal(false)} className={styles.cancelButton}>Não</button>
</div>

          </div>
        </div>
      )}
    </>
  );
};

export default EditAgiotaModal;
