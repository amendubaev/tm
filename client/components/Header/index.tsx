import React from "react";
import styles from "./header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>TaskManager</h1>
        </header>
    );
}
