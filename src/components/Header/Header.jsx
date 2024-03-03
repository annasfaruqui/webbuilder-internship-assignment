import styles from "./Header.module.scss";

import HeaderBreadcrumb from "./HeaderBreadcrumb";
import HeaderDateRow from "./HeaderDateRow";
import HeaderListTab from "./HeaderListTab";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className="primary-heading">Best Website builders in the US</h1>
      <HeaderDateRow />
      <HeaderListTab />
      <HeaderBreadcrumb />
    </header>
  );
}

export default Header;
