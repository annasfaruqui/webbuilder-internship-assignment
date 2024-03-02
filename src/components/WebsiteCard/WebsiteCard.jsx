import {
  IoChevronDownOutline,
  IoDiamondOutline,
  IoStar,
  IoTrophyOutline,
} from "react-icons/io5";
import styles from "./WebsiteCard.module.scss";
import Button from "../Button/Button";

function WebsiteCard({ card }) {
  return (
    <div className={styles.card}>
      {card.bestChoice && (
        <p className={styles.card__bestTag}>
          <span className="center">
            <IoTrophyOutline />
          </span>
          Best Choice
        </p>
      )}
      {card.bestValue && (
        <p className={styles.card__bestTag}>
          <span className="center">
            <IoDiamondOutline />
          </span>
          Best Value
        </p>
      )}

      <div className={styles["card__col--1"]}>
        <span className={styles.card__number}>{card.number}</span>
        <img
          className={styles.card__image}
          src={card.image}
          alt={card.caption}
        />
        <span className={styles.card__caption}>{card.caption}</span>
      </div>
      <div className={styles["card__col--2"]}>
        <p className={styles.card__description}>
          <strong className={styles.card__strongText}>{card.title}</strong> -{" "}
          {card.description}
        </p>
        <div className={styles.card__highlight}>
          <strong
            className={`${styles.card__strongText} ${styles["card__highlight--heading"]}`}
          >
            Main highlights
          </strong>
          <p className={styles["card__highlight--description"]}>
            {card.highlights}
          </p>
        </div>
        <Button type="half">
          Show more
          <span className="center">
            <IoChevronDownOutline />
          </span>
        </Button>
      </div>
      <div className={styles["card__col--3"]}>
        <div className={styles.card__ratings}>
          <strong className={styles["card__ratings--rating"]}>
            {card.rating}
          </strong>
          <p className={styles["card__ratings--status"]}>{card.status}</p>
          <span className={styles["card__ratings--stars"]}>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </span>
        </div>
        <div className={styles.card__btnContainer}>
          <Button type="full">View</Button>
        </div>
      </div>
    </div>
  );
}

export default WebsiteCard;
