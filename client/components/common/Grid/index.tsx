import React from "react";
import styles from "./grid.module.scss";

export function Container() {
    return <div className={styles.container}>container</div>;
}

export function Row() {
    return <div className={styles.row}>row</div>;
}

export function Col() {
    return <div className={styles.col}>col</div>;
}
