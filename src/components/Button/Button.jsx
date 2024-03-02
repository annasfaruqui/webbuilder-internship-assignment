import styles from "./Button.module.scss";

function Button({ children, type, variation }) {
  let color;
  if (variation === "primary") color = "--primary";
  if (variation === "secondary") color = "--secondary";

  if (type === "full")
    return (
      <button
        className={`${styles.btn} ${styles.btn__full} ${
          styles[`btn__full${color}`]
        }`}
      >
        {children}
      </button>
    );

  if (type === "half")
    return (
      <button
        className={`${styles.btn} ${styles.btn__half} ${
          styles[`btn__half${color}`]
        }`}
      >
        {children}
      </button>
    );
}

export default Button;
