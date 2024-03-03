import styles from "./FooterLink.module.scss";

function FooterLink({ link }) {
  return (
    <div>
      <h5 className={styles.footer__heading}>{link.heading}</h5>
      <nav className={styles.footer__nav}>
        <ul className={styles["footer__nav--list"]}>
          {link.links.map((link) => (
            <li key={link.id}>
              <a href={link.to} className={styles["footer__nav--link"]}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default FooterLink;
