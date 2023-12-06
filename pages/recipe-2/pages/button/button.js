import Link from "next/link";
import styles from "../styles/button.module.css";
import React from "react";

export default function Button({ text }) {
    return (
        <Link href="https://nextjs.org/docs">
            <button className={styles.button} formTarget="_blank">{text}</button>
        </Link>
    );
}
