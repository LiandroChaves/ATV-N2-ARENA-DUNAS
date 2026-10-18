import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.conteudo}>
                <span className={styles.textoEsquerda}>
                    arena dunas • Esporte que aproxima.
                </span>
                <span className={styles.textoDireita}>
                    arena projeto • Web II - Jonh
                </span>
            </div>
        </footer>
    );
}
