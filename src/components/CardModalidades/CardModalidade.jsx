import React from "react";
import styles from "./CardModalidade.module.css";

export default function CardModalidade({ nome, descricao, icone }) {
    return (
        <div className={styles.card}>
            <div className={styles.iconeWrapper}>
                <img src={icone} alt={nome} className={styles.icone} />
            </div>
            <h3 className={styles.nome}>{nome}</h3>
            <p className={styles.descricao}>{descricao}</p>
        </div>
    );
}
