"use client";

import { useRouter } from "next/navigation";
import styles from './sucesso.module.scss';

const SucessoPage = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/emprestimo-usuario');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Empréstimo Solicitado com Sucesso!</h1>
      <p className={styles.message}>Seu pedido de empréstimo foi recebido e está em processamento.</p>
      <button className={styles.button} onClick={handleRedirect}>
        Voltar à Página Inicial
      </button>
    </div>
  );
};

export default SucessoPage;

