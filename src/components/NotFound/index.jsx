import { useNavigate } from "react-router";
import Button from "../Button";
import styles from "./NotFound.module.css";
import erro404 from "src/assets/erro_404.png";

const NotFound = () => {

  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>
        <div 
          className={styles.botaoContainer}
          onClick={() => navegar(-1)}
        >
          <Button tamanho="lg">
              Voltar
          </Button>
        </div>
        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="Cachorro de óculos e vestido como humano"
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
};

export default NotFound;
