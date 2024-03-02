import styles from "./WebsiteCardHighlights.module.scss";

function WebsiteCardHighlights({ highlights }) {
  return (
    <div className={styles.highlight}>
      <strong className={`strong ${styles.highlight__heading}`}>
        Main highlights
      </strong>
      <>
        {typeof highlights === "string" && (
          <p className={styles.highlight__description}>{highlights}</p>
        )}
        {typeof highlights === "object" && (
          <div className={styles.highlight__container}>
            <ul className={styles.highlight__list}>
              {highlights.map((el) => (
                <li key={el.id} className={styles.highlight__item}>
                  <span>{el.rating}</span>
                  {el.highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    </div>
  );
}

export default WebsiteCardHighlights;
