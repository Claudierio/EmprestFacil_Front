"use client";

import React, { useState } from "react";
import styles from "../formStyles.module.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { api } from "../../shared/service/api/api";
import { useAuthContext } from "@/app/shared/contexts/Auth/AuthContext";

export default function EditProfile() {
    const { user, setUser } = useAuthContext();
    const [nome, setNome] = useState(user?.nome || '');
    const [email, setEmail] = useState(user?.email || '');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState(user?.dataNascimento || '');
    const [role, setRole] = useState(user?.role || 'CLIENTE');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        if (!user) {
            setError('Usuário não autenticado.');
            return;
        }

        try {
            const response = await api.put(`/api/usuarios/${user.id}`, {
                nome,
                email,
                senha: senha || undefined,
                dataNascimento,
                role
            });

            const updatedUser = response.data;
            setUser(updatedUser);
            setSuccess('Perfil atualizado com sucesso!');
        } catch (error) {
            setError('Erro ao atualizar o perfil. Tente novamente.');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.loginBox}>
                    <div className={styles.title}>
                        <h1>Editar Perfil</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    placeholder="Nome"
                                    className={styles.input}
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                                <PersonOutlineOutlinedIcon className={styles.icon} />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className={styles.input}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <EmailOutlinedIcon className={styles.icon} />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="date"
                                    id="dataNascimento"
                                    name="dataNascimento"
                                    placeholder="Data de Nascimento"
                                    className={styles.input}
                                    value={dataNascimento}
                                    onChange={(e) => setDataNascimento(e.target.value)}
                                    required
                                />
                                <CalendarTodayOutlinedIcon className={styles.icon} />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.inputWrapper}>
                                <select
                                    id="role"
                                    name="role"
                                    className={styles.input}
                                    value={role}
                                    onChange={(e) => setRole(e.target.value as "CLIENTE" | "AGIOTA")}
                                    required
                                >
                                    <option value="CLIENTE">Cliente</option>
                                    <option value="AGIOTA">Agiota</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    placeholder="Nova Senha (opcional)"
                                    className={styles.input}
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <LockOutlinedIcon className={styles.icon} />
                            </div>
                        </div>
                        {error && <p className={styles.error}>{error}</p>}
                        {success && <p className={styles.success}>{success}</p>}
                        <button type="submit" className={styles.loginButton}>
                            Salvar Alterações
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
