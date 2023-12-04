import { About } from "./about";
import { Img } from "./img";
import styles from './styles/recipe-1.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h2>FRAMEWORK NEXT.JS</h2>
            <About />
            <Img />
        </div>
    );
}
