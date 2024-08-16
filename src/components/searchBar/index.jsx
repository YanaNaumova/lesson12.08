import styles from "./styles.module.css";
import Search from "../../assets/icons/search.svg";
import Location from "../../assets/icons/location.svg";
import Disnep from "../../assets/icons/disnep.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Microsoft from "../../assets/icons/microsoft.svg";
import Sony from "../../assets/icons/sony.svg";
import Cola from "../../assets/icons/cola.svg";

function SearchBar() {
  return (
    <div>
      <div className={styles.searchBar_container}>
        <div className={styles.searchBar_textContainer}>
          <h1>
            Один клик <br /> и работа в кармане
          </h1>
          <div className={styles.searchBar_FormContainer}>
            <div className={styles.searchBar_InputContainer}>
              <div className={styles.searchBar_inputSearchContainer}>
                <img src={Search} alt="search" />
                <input type="text" placeholder="Должность или компания" />
              </div>
              <div className={styles.pipe}></div>
              <div className={styles.searchBar_inputLocationContainer}>
                <img src={Location} alt="location" />
                <input type="text" placeholder="Город, Страна" />
              </div>
            </div>
            <button className={styles.searchBar_btn}>Поиск</button>
          </div>
        </div>
      </div>
      <div className={styles.employerCompanies}>
        <p>Помогаем найти работу:</p>
        <div className={styles.companiesList}>
          <img src={Disnep} alt="disnep" className={styles.disnep} />
          <img src={Facebook} alt="facebook" className={styles.facebook} />
          <img src={Microsoft} alt="microsoft" className={styles.microsoft} />
          <img src={Sony} alt="sony" className={styles.sony} />
          <img src={Cola} alt="cola" className={styles.cola} />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
