import { About } from "./about/about";
import { Img } from "./img/img";
import { Like } from "./like/like";
import styles from "./styles/novaPagina.module.css"

export default function Principal() {
    return (
        <div className={styles.container}>
            <Img/>
            <About/>
            <Like language="Node.js"/>
        </div>
    );
}
