import styles from "./Footer.module.scss";
import { footerLinks } from "../../data/data_footerLinks";
import { IoChevronDownOutline } from "react-icons/io5";
import Button from "../Button/Button";

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
        <div className={styles.footer__country}>
          <div className={styles["footer__country--btnContainer"]}>
            <Button type="half" variation="secondary">
              United States
              <span className="center">
                <IoChevronDownOutline />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
