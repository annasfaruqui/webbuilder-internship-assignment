import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import styles from "./WebsiteCardRating.module.scss";

import Button from "../Button/Button";

import { hasDecimalPart } from "../../utils/helpers";
import { MAX_RATING } from "../../utils/constants";

function WebsiteCardRating({ rating, status, stars }) {
  return (
    <div className={styles.rating}>
      <div className={styles.rating__ratings}>
        <strong className={styles["rating__ratings--rating"]}>{rating}</strong>
        <p className={styles["rating__ratings--status"]}>{status}</p>
        <span className={styles["rating__ratings--stars"]}>
          {Array.from({ length: Math.floor(stars) }, (_, i) => (
            <span key={i}>
              <IoStar />
            </span>
          ))}

          {Array.from({ length: hasDecimalPart(stars) }, (_, i) => (
            <span key={i}>
              <IoStarHalf />
            </span>
          ))}

          {Array.from({ length: MAX_RATING - Math.ceil(stars) }, (_, i) => (
            <span key={i}>
              <IoStarOutline />
            </span>
          ))}
        </span>
      </div>
      <div className={styles.btnContainer}>
        <Button type="full" variation="primary">
          View
        </Button>
      </div>
    </div>
  );
}

export default WebsiteCardRating;
