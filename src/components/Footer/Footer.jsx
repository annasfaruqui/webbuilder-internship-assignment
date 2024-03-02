import styles from "./Footer.module.scss";
import { footerLinks } from "../../data/data_footerLinks";

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

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__grid}`}>
        {footerLinks.map((el) => (
          <FooterLink key={el.id} link={el} />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
