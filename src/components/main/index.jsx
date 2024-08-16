import CategoryCardList from "../categoryCardList";
import SearchBar from "../searchBar";
import VacancyCardList from "../vacancyCardList";
import styles from "./styles.module.css";

function Main() {
  return (
    <div className={styles.main_container}>
      <SearchBar />
      <CategoryCardList />
      <VacancyCardList />
    </div>
  );
}

export default Main;
