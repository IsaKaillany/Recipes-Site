import styles from "./styles/index.module.css";
import Link from "next/link";

export default function Main() {
    return (
        <div className={styles.pageContainer}>
            <h1>Receitas - Unidade 2</h1>
            <div className={styles.cardsContainer}>
                <Link href="./recipe-1/recipe-1" className={styles.linkPage}>
                    <div className={styles.card}>Receita 1</div>
                </Link>
                <Link
                    href="./recipe-2/pages/recipe-2"
                    className={styles.linkPage}
                >
                    <div className={styles.card}>Receita 2</div>
                </Link>
                <Link href="./recipe-3/movies" className={styles.linkPage}>
                    <div className={styles.card}>Receita 3</div>
                </Link>
                <Link href="./recipe-4/movies2" className={styles.linkPage}> 
                    <div className={styles.card}>Receita 4</div>
                </Link>
            </div>
        </div>
    );
}
