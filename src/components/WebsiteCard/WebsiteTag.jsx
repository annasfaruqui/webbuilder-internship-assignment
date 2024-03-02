import { IoDiamondOutline, IoTrophyOutline } from "react-icons/io5";
import styles from "./WebsiteTag.module.scss";

function WebsiteTag({ bestValue, bestChoice }) {
  return (
    <>
      {bestChoice && (
        <p className={styles.tag}>
          <span className="center">
            <IoTrophyOutline />
          </span>
          Best Choice
        </p>
      )}
      {bestValue && (
        <p className={styles.tag}>
          <span className="center">
            <IoDiamondOutline />
          </span>
          Best Value
        </p>
      )}
    </>
  );
}

export default WebsiteTag;
