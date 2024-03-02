import styles from "./Button.module.scss";

function Button({ children, type }) {
  if (type === "full")
    return (
      <button className={`${styles.btn} ${styles.btn__full}`}>
        {children}
      </button>
    );

  if (type === "half")
    return (
      <button className={`${styles.btn} ${styles.btn__half}`}>
        {children}
      </button>
    );
}

export default Button;
