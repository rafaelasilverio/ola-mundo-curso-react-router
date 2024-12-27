import styles from './Footer.module.css';
import { ReactComponent as MarcaRegistrada } from 'src/assets/marca_registrada.svg';

const Footer = () => {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            Desenvolvido por Alura.
        </footer>
    );
}

export default Footer;