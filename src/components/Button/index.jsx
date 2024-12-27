import styles from './Button.module.css';


const Button = ({children, tamanho}) => {
    return(
        <button className={`
                ${styles.botao}
                ${styles[tamanho]} 
        `}>
            {children}
        </button>
    );
} 

export default Button;