import React from "react";
import styles from "./DeleteConfirmationModal.module.scss";

interface DeleteConfirmationModalProps {
  onDeleteConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  onDeleteConfirm,
  onCancel,
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h3>Tem certeza que deseja excluir este agiota?</h3>
        <div className={styles.buttonContainer}>
          <button onClick={onDeleteConfirm} className={styles.confirmButton}>Sim</button>
          <button onClick={onCancel} className={styles.cancelButton}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
