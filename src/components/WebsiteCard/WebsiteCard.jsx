import styles from "./WebsiteCard.module.scss";

import WebsiteCardIntro from "./WebsiteCardIntro";
import WebsiteCardDescription from "./WebsiteCardDescription";
import WebsiteCardRating from "./WebsiteCardRating";
import WebsiteTag from "./WebsiteTag";

function WebsiteCard({ card }) {
  const {
    number,
    image,
    caption,
    title,
    description,
    highlights,
    rating,
    status,
    stars,
    bestChoice,
    bestValue,
    discountPercentage: discount,
    features,
  } = card;

  return (
    <div className={styles.card}>
      <WebsiteTag bestChoice={bestChoice} bestValue={bestValue} />
      <WebsiteCardIntro image={image} caption={caption} number={number} />
      <WebsiteCardDescription
        title={title}
        description={description}
        highlights={highlights}
        discount={discount}
        features={features}
      />
      <WebsiteCardRating rating={rating} status={status} stars={stars} />
    </div>
  );
}

export default WebsiteCard;
