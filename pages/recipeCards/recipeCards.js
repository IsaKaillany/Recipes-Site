import Link from 'next/link';
import styles from './recipeCards.module.css';

export function RecipeCards() {
    return (
        <div className={styles.cardsContainer}>
            <Link href="../recipe-1/recipe-1" className={styles.linkPage}>
                <div className={styles.card}>
                    Receita 1
                </div>
            </Link>
            <Link href="../recipe-2/pages/recipe-2" className={styles.linkPage}>
                <div className={styles.card}>
                    Receita 2
                </div>
            </Link>
             <Link href="../recipe-3/movies" className={styles.linkPage}>
                <div className={styles.card}>
                    Receita 3
                </div>
            </Link>
          {/*  <Link >
                <div className={styles.card}>
                    Receita 4
                </div>
            </Link>
            <Link >
                <div className={styles.card}>
                    Receita 5
                </div>
            </Link>
            <Link >
                <div className={styles.card}>
                    Receita 6
                </div>
            </Link>
            <Link >
                <div className={styles.card}>
                    Receita 9
                </div>
            </Link> */}
        </div>
    )
}
