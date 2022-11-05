import React from "react";
import styles from "./header.module.scss";
import Logo from "../common/Logo";

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
        </header>
    );
}
