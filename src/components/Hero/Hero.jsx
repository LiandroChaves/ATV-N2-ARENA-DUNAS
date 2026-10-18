import React from "react";
import styles from "./Hero.module.css";
import defaultHeroImg from "../../assets/imgHero.png";

export default function Hero({ img = defaultHeroImg }) {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <span className={styles.tagline}>Esporte • areia • conexão</span>
                <h1 className={styles.title}>
                    Seu próximo jogo<br />
                    começa na areia.
                </h1>
                <p className={styles.description}>
                    Um espaço para se movimentar,<br />
                    encontrar a galera e descobrir seu<br />
                    esporte favorito.<br />
                    Conheça a Arena Dunas.
                </p>
            </div>
            <div className={styles.imageWrapper}>
                <img src={img} alt="Quadra de areia Arena Dunas" className={styles.courtImage} />
            </div>
        </section>
    );
}
