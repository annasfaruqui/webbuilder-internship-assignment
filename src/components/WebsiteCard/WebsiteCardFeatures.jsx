import { IoCheckmark } from "react-icons/io5";
import styles from "./WebsiteCardFeatures.module.scss";

function WebsiteCardFeatures({ features }) {
  return (
    <div className={styles.features}>
      <p className={styles.features__heading}>Why we love it</p>
      <ul className={styles.features__list}>
        {features &&
          features.map((el, idx) => (
            <li key={idx} className={styles.features__feature}>
              <span className={styles.features__icon}>
                <IoCheckmark />
              </span>
              {el}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default WebsiteCardFeatures;
