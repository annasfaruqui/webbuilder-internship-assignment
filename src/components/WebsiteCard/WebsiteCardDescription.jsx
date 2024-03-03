import { IoChevronDownOutline } from "react-icons/io5";
import styles from "./WebsiteCardDescription.module.scss";

import Button from "../Button/Button";
import WebsiteCardHighlights from "./WebsiteCardHighlights";
import WebsiteCardFeatures from "./WebsiteCardFeatures";

function WebsiteCardDescription({
  title,
  description,
  highlights,
  discount,
  features,
}) {
  return (
    <div className={styles.description}>
      <p className={styles.description__detail}>
        <strong className="strong">{title}</strong> - {description}
      </p>
      {discount && <p className={styles.discount}>{discount}% off</p>}

      <WebsiteCardHighlights highlights={highlights} />
      {features && <WebsiteCardFeatures features={features} />}

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
