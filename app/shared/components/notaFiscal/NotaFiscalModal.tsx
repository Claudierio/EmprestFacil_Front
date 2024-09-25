import React from "react";
import styles from "./NotaFiscalModal.module.scss";
import { IEmprestimo } from "../../@types/auth";

interface INotaFiscalModalProps {
  isOpen: boolean;
  onClose: () => void;
  emprestimo: IEmprestimo | null;
}

const NotaFiscalModal: React.FC<INotaFiscalModalProps> = ({
  isOpen,
  onClose,
  emprestimo,
}) => {
  if (!isOpen || !emprestimo) return null;

  const dataEmprestimo = new Date(emprestimo.dataEmprestimo).toLocaleDateString("pt-BR");
  const dataVencimento = new Date(emprestimo.dataVencimento).toLocaleDateString("pt-BR");
  const valorTotal = emprestimo.valor + (emprestimo.valor * (emprestimo.agiota?.taxaJuros || 0)) / 100;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Detalhes do Empréstimo</h2>
        <p><strong>Agiota:</strong> {emprestimo.agiota?.nome || "Desconhecido"}</p>
        <p><strong>Usuário:</strong> {emprestimo.usuario?.nome || "Desconhecido"}</p>
        <p><strong>Valor:</strong> {emprestimo.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
        <p><strong>Parcelas:</strong> {emprestimo.parcelas}</p>
        <p><strong>Taxa de Juros:</strong> {emprestimo.agiota?.taxaJuros}%</p>
        <p><strong>Valor Total:</strong> {valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
        <p><strong>Data de Empréstimo:</strong> {dataEmprestimo}</p>
        <button onClick={onClose} className={styles.closeButton}>Fechar</button>
      </div>
    </div>
  );
};

export default NotaFiscalModal;
