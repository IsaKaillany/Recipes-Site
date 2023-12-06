import { About } from "./about/about";
import Button from "./button/button";
import { Img } from "./img/img";
import NavBar from "./navBar/navBar";
import styles from "./styles/novaPagina.module.css";

export default function Principal() {
    return (
        <div className={styles.container}>
            <NavBar />
            {/* <Img />
            <About /> */}
            <Button text="Documentação" />
        </div>
    );
}
