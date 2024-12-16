import styles from './Banner.module.css';
import circuloColorido from 'src/assets/circulo_colorido.png'
import minhaFoto from 'src/assets/minha_foto.png';

const Banner = () => {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
                <div className={styles.imagens}>
                    <img 
                        className={styles.circuloColorido} 
                        src={circuloColorido} 
                        aria-hidden={true} 
                    />
                    <img                         
                        className={styles.minhaFoto} 
                        src={minhaFoto} 
                        alt="Foto do Antônio Evaldo sorrindo"
                    />
                </div>
            </div>
        </div>
    );
}
export default Banner;