import React from "react";
import CardModalidade from "../CardModalidades/CardModalidade";
import styles from "./Modalidades.module.css";

import raqueteIcon from "../../assets/vetor raquete.png";
import voleiIcon from "../../assets/vetor-bola-de-volei.jpg";
import pesIcon from "../../assets/vetor-pes.jpg";

export default function Modalidades() {
    return (
        <section id="modalidades" className={styles.modalidadesSection}>
            <div className={styles.header}>
                <h2 className={styles.titulo}>Encontre seu jogo.</h2>
                <span className={styles.subtitulo}>Três modalidades, muita diversão.</span>
            </div>

            <div className={styles.cardsContainer}>
                <CardModalidade 
                    nome="Beach Tennis" 
                    descricao="Raquete na mão e muita diversão." 
                    icone={raqueteIcon} 
                />
                <CardModalidade 
                    nome="Vôlei de praia" 
                    descricao="Reúna sua dupla e venha para a rede" 
                    icone={voleiIcon} 
                />
                <CardModalidade 
                    nome="Futevôlei" 
                    descricao="Habilidade nos pés e parceria na areia" 
                    icone={pesIcon} 
                />
            </div>
        </section>
    );
}
