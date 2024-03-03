import { IoChevronDownOutline } from "react-icons/io5";
import styles from "./Footer.module.scss";

import Button from "../Button/Button";
import FooterLink from "./FooterLink";

import { footerLinks } from "../../data/data_footerLinks";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`inner-container ${styles.footer__grid}`}>
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
