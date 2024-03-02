import styles from "./WebsiteCardIntro.module.scss";

function WebsiteCardIntro({ image, number, caption }) {
  return (
    <div className={styles.intro}>
      <span className={styles.intro__number}>{number}</span>
      <img className={styles.intro__image} src={image} alt={caption} />
      <span className={styles.intro__caption}>{caption}</span>
    </div>
  );
}

export default WebsiteCardIntro;
