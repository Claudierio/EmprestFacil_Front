"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createEmprestimo, listAgiotas } from "@/app/shared/service/api/Auth/authApi";
import styles from "./solicitaEmprestimo.module.scss";

interface Agiota {
  id: string;  
  nome: string;
  taxaJuros: number;
}

const SolicitarEmprestimo = () => {
  const [formData, setFormData] = useState({
    valorEmprestado: "",
    parcelas: "",
    agiotaSelecionado: "",
  });
  const [agiotas, setAgiotas] = useState<Agiota[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();

  // Carrega a lista de agiotas
  useEffect(() => {
    const fetchAgiotas = async () => {
      try {
        const agiotasData: Agiota[] = await listAgiotas();
        setAgiotas(agiotasData);
      } catch (error) {
        console.error("Erro ao buscar agiotas:", error);
        setError("Erro ao carregar agiotas. Tente novamente mais tarde.");
      }
    };
    fetchAgiotas();
  }, []);

  // Função de validação dos campos
  const validateFields = () => {
    const valorEmprestado = parseFloat(formData.valorEmprestado);
    const parcelas = parseInt(formData.parcelas, 10);
    const agiota = agiotas.find((a) => a.id === formData.agiotaSelecionado);

    if (isNaN(valorEmprestado) || isNaN(parcelas) || !agiota) {
      setError("Preencha todos os campos corretamente.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    try {
      console.log("Form data:", formData);
      const valorEmprestado = parseFloat(formData.valorEmprestado);
      const parcelas = parseInt(formData.parcelas, 10);

      const agiota = agiotas.find((a) => String(a.id) === String(formData.agiotaSelecionado));

      if (!agiota) {
        throw new Error("Agiota não encontrado.");
      }

      const taxaJuros = agiota.taxaJuros;
      const idAgiota = agiota.id; 

      await createEmprestimo({
        valorEmprestado,
        parcelas,
        taxaJuros,
        idAgiota,  
      });

      router.push("/sucesso");
    } catch (error: any) {
      setError(error.message || "Erro ao solicitar empréstimo.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Solicitar Empréstimo</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="valorEmprestado" className={styles.label}>
            Valor do Empréstimo:
          </label>
          <input
            type="number"
            id="valorEmprestado"
            name="valorEmprestado"
            value={formData.valorEmprestado}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="parcelas" className={styles.label}>
            Número de Parcelas:
          </label>
          <input
            type="number"
            id="parcelas"
            name="parcelas"
            value={formData.parcelas}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div> 
        <div className={styles.formGroup}>
          <label htmlFor="agiotaSelecionado" className={styles.label}>
            Selecione um Agiota:
          </label>
          <select
            id="agiotaSelecionado"
            name="agiotaSelecionado"
            value={formData.agiotaSelecionado}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="" disabled>Selecione um agiota</option>
            {agiotas.map((agiota) => (
              <option key={agiota.id} value={agiota.id}>
                {agiota.nome} - Taxa de Juros: {agiota.taxaJuros}%
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className={styles.button}>
          Solicitar
        </button>
      </form>
    </div>
  );
};

export default SolicitarEmprestimo;




