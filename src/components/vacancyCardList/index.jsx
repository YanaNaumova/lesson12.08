import Location from "../../assets/icons/location.svg";
import Sony from "../../assets/icons/sonyMin.svg";
import Facebook from "../../assets/icons/facebookMin.svg";
import Cola from "../../assets/icons/colaMin.svg";
import styles from "./styles.module.css";
import VacancyCard from "../vacancyCard";

function VacancyCardList() {
  // Создайте массив объектов, каждый из которых содержит информацию о вакансии, включая
  // категорию, текст вакансии, местоположение, картинку и название компании.
  const vacancies = [
    {
      color: "#5182FF",
      department: "Финансы",
      description: "Менеджер по управлению финансами в крупной компании",
      img: Location,
      location: "Осака, Япония",
      logo: Sony,
      employer: "Sony",
      data: "3 дня назад",
    },
    {
      color: "#FF51EE",
      department: "Продажи",
      description: "Специалист по продажам",
      img: Location,
      location: "Коясан, Япония",
      logo: Facebook,
      employer: "Facebook",
      data: "7 дней назад",
    },
    {
      color: "#58D94D",
      department: "Служба поддержки",
      description: "Оператор колл центра",
      img: Location,
      location: "Томаму, Япония",
      logo: Cola,
      employer: "CocaCola",
      data: " 1 день назад",
    },
    {
      color: "#FF9051",
      department: "Мультимедиа",
      description: "Системный администратор",
      img: Location,
      location: "Токио, Япония",
      logo: Sony,
      employer: "Sony",
      data: "3 дня назад",
    },
    {
      color: "#F84242",
      department: "Дизайн",
      description:
        "Дизайнер интерьера в профессиональную студию в центре города",
      img: Location,
      location: "Йокогама, Япония",
      logo: Facebook,
      employer: "Facebook",
      data: "7 дней назад",
    },
    {
      color: "#383838",
      department: "Грузоперевозки",
      description: "Водитель на дальние дистанции",
      img: Location,
      location: "Кобе. Япония",
      logo: Cola,
      employer: "CocaCola",
      data: "1 день назад",
    },
  ];

  return (
    <div className={styles.vacancyCardListContainer}>
      <div className={styles.newVacationHeaderContainer}>
        <h1 className={styles.newVacationHeader}>Новые вакансии</h1>
        <p className={styles.newVacationHeaderDescription}>
          Найди работу своей мечты прямо сейчас
        </p>
      </div>
      <div className={styles.vacancyCardList}>
        {vacancies.map((item, ind) => {
          return <VacancyCard key={ind} cardInfo={item} />;
        })}
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>Все вакансии</button>
      </div>
    </div>
  );
}

export default VacancyCardList;
