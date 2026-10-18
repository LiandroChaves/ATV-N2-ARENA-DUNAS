import React from "react";
import Button from "../ui/Button";
import styles from "./Header.module.css";


export default function Header({ logo }) {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <img src={logo} alt="logo" className={styles.logo} />
                <nav className={styles.navBar}>
                    <a href="#modalidades" className={styles.modalidades}>Modalidades</a>
                    <a href="#cadastro">
                        <Button text="Quero participar" className={styles.btn}/>
                    </a>
                </nav>
            </div>
            <hr className={styles.linha}/>
        </header>                                                                                                  
        </>
    )
}