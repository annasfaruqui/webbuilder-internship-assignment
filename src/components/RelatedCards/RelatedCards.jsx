import { relatedCards } from "../../data/data_relatedCards";
import RelatedCard from "../RelatedCard/RelatedCard";
import styles from "./RelatedCards.module.scss";

function RelatedCards() {
  return (
    <div className={styles.related}>
      {relatedCards.map((card) => (
        <RelatedCard card={card} key={card.id} />
      ))}
    </div>
  );
}

export default RelatedCards;
