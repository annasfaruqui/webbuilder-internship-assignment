import { websiteCards } from "../../data/data_websiteCards";
import WebsiteCard from "../WebsiteCard/WebsiteCard";
import styles from "./WebsiteCards.module.scss";

function WebsiteCards() {
  return (
    <div className={`container ${styles.cards}`}>
      {websiteCards.map((card) => (
        <WebsiteCard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default WebsiteCards;
