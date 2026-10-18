import React, { useState } from "react";
import Button from "../ui/Button";
import styles from "./CadastroCliente.module.css";

export default function CadastroCliente() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [modalidade, setModalidade] = useState("");

    const [mensagem, setMensagem] = useState({ tipo: "", texto: "" });

    function handleSubmit(event) {
        event.preventDefault();

        if (!nome.trim() || !email.trim() || !telefone.trim() || !modalidade) {
            setMensagem({
                tipo: "erro",
                texto: "Preencha todos os campos obrigatórios antes de enviar!"
            });
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            setMensagem({
                tipo: "erro",
                texto: "Digite um e-mail válido (ex: seuemail@exemplo.com)!"
            });
            return;
        }

        setMensagem({
            tipo: "sucesso",
            texto: `Inscrição de ${nome} realizada com sucesso na modalidade ${modalidade}!`
        });

        setNome("");
        setEmail("");
        setTelefone("");
        setModalidade("");
    }

    return (
        <section id="cadastro" className={styles.cadastroSection}>
            <div className={styles.infoWrapper}>
                <span className={styles.subtituloVerde}>FAÇA PARTE DA ARENA</span>
                <h2 className={styles.titulo}>Entre para a galera das Dunas</h2>
                <p className={styles.descricao}>
                    Preencha seus dados e nos conte qual modalidade combina com você.
                </p>

                <ul className={styles.beneficios}>
                    <li>
                        <span className={styles.checkIcon}>✓</span>
                        Quadras iluminadas
                    </li>
                    <li>
                        <span className={styles.checkIcon}>✓</span>
                        Ambiente para iniciantes e experientes
                    </li>
                    <li>
                        <span className={styles.checkIcon}>✓</span>
                        Espaço de convivência
                    </li>
                </ul>
            </div>

            <div className={styles.formCard}>
                <form onSubmit={handleSubmit} className={styles.formulario}>
                    <div className={styles.campo}>
                        <label htmlFor="nome">Nome completo *</label>
                        <input
                            id="nome"
                            type="text"
                            placeholder="Como você se chama?"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className={styles.campo}>
                        <label htmlFor="email">Email *</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="voce@exemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={styles.campo}>
                        <label htmlFor="telefone">Telefone *</label>
                        <input
                            id="telefone"
                            type="tel"
                            placeholder="(88) 99999-9999"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </div>

                    <div className={styles.campo}>
                        <label htmlFor="modalidade">Modalidade de interesse *</label>
                        <select
                            id="modalidade"
                            value={modalidade}
                            onChange={(e) => setModalidade(e.target.value)}
                        >
                            <option value="">Selecione a modalidade</option>
                            <option value="BEACH TENIS">BEACH TENIS</option>
                            <option value="VÔLEI DE PRAIA">VÔLEI DE PRAIA</option>
                            <option value="FUTVÔLEI">FUTVÔLEI</option>
                        </select>
                    </div>

                    <Button
                        type="submit"
                        text="ENVIAR INSCRIÇÃO"
                        className={styles.btnEnviar}
                    />

                    {mensagem.texto && (
                        <div
                            className={
                                mensagem.tipo === "sucesso"
                                    ? styles.msgSucesso
                                    : styles.msgErro
                            }
                        >
                            {mensagem.texto}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}
