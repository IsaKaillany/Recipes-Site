import { RecipeCards } from "./recipeCards/recipeCards";
import styles from "./styles/index.module.css";


export default function Main() {
    return (
        <div className={styles.pageContainer}>
            <h1>Receitas - Unidade 2</h1>
            <RecipeCards />
        </div>
    );
}
