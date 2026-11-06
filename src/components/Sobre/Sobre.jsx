import styles from "./Sobre.module.css";

export default function Sobre() {
	return (
		<section id="sobre" className={styles.sobreSection}>
			<span className={styles.subtitulo}>CONHEÇA A ARENA</span>
			<h2 className={styles.titulo}>Esporte, diversão e bons encontros</h2>
			<p className={styles.descricao}>
				A Arena Dunas é o lugar ideal para praticar esportes na areia,
				conhecer pessoas e aproveitar bons momentos. Temos modalidades
				para todos os níveis, em um ambiente acolhedor e cheio de energia.
			</p>
		</section>
	);
}
