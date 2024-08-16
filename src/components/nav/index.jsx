import styles from "./styles.module.css";
import CoolJobLogo from "../../assets/icons/cooljob.svg";

function Nav() {
  return (
    <div className={styles.nav_container}>
      <img src={CoolJobLogo} alt="cooljob_logo" />
      <div className={styles.nav_menu}>
        <div>
          <a href="#">Поиск работы</a>
          <a href="#">Поиск стартапов</a>
        </div>
        <div>
          <a href="#">Регистрация</a>
          <button className={styles.login_btn}>Вход</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
