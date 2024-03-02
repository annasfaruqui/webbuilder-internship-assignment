import { IoChevronDownOutline } from "react-icons/io5";
import styles from "./WebsiteCardDescription.module.scss";
import Button from "../Button/Button";

function WebsiteCardDescription({ title, description, highlights }) {
  return (
    <div className={styles.description}>
      <p className={styles.description__detail}>
        <strong className={styles.description__strongText}>{title}</strong> -{" "}
        {description}
      </p>
      <div className={styles.description__highlight}>
        <strong
          className={`${styles.description__strongText} ${styles["description__highlight--heading"]}`}
        >
          Main highlights
        </strong>
        {typeof highlights === "string" && (
          <p className={styles["description__highlight--description"]}>
            {highlights}
          </p>
        )}

        {typeof highlights === "object" && (
          <div className={styles["description__highlight--container"]}>
            <ul className={styles["description__highlight--list"]}>
              {highlights.map((el) => (
                <li
                  key={el.id}
                  className={styles["description__highlight--item"]}
                >
                  <span>{el.rating}</span>
                  {el.highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Button type="half" variation="primary">
        Show more
        <span className="center">
          <IoChevronDownOutline />
        </span>
      </Button>
    </div>
  );
}

export default WebsiteCardDescription;
