import Form from "../Form/Form";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.nav__layout}`}>
        <Form />
        <ul className={styles.nav__list}>
          <li className={styles.nav__link}>Categories</li>
          <li className={styles.nav__link}>Website Builders</li>
          <li className={styles.nav__link}>Today's deals</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
