import { IoSearch } from "react-icons/io5";
import styles from "./Form.module.scss";

function Form() {
  return (
    <form>
      <div className={styles.search}>
        <span className={styles.search__icon}>
          <IoSearch />
        </span>
        <input type="search" className={styles.search__input} />
      </div>
    </form>
  );
}

export default Form;
