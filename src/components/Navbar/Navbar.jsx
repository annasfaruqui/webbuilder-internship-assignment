import styles from "./Navbar.module.scss";
import SearchForm from "../SearchForm/SearchForm";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`inner-container ${styles.nav__layout}`}>
        <SearchForm />
        <ul className={styles.nav__list}>
          <li>
            <a className={styles.nav__link} href="/categories">
              Categories
            </a>
          </li>
          <li>
            <a className={styles.nav__link} href="/website-builders">
              Website Builders
            </a>
          </li>
          <li>
            <a className={styles.nav__link} href="/today-deals">
              Today's deals
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
