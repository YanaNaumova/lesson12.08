import Circle from "../../assets/icons/circle.svg";
import Car from "../../assets/icons/car.svg";
import Window from "../../assets/icons/window.svg";
import ForkKnife from "../../assets/icons/forkKnife.svg";
import Bandage from "../../assets/icons/bandage.svg";
import Movie from "../../assets/icons/movie.svg";
import Message from "../../assets/icons/message.svg";
import Box from "../../assets/icons/box.svg";
import Cart from "../../assets/icons/cart.svg";
import CategoryCard from "../categoryCard";
import styles from "./styles.module.css";
import Arrow from "../../assets/icons/arrow.svg";

function CategoryCardList() {
  const cardInfo = [
    {
      text: "Финансы",
      url: Circle,
    },
    {
      text: "Грузоперевозки",
      url: Car,
    },
    {
      text: "Дизайн",
      url: Window,
    },
    {
      text: "Ресторанный бизнес",
      url: ForkKnife,
    },
    {
      text: "Медицина",
      url: Bandage,
    },
    {
      text: "Мультимедиа",
      url: Movie,
    },
    {
      text: "Служба поддержки",
      url: Message,
    },
    {
      text: "Менеджмент",
      url: Box,
    },
    {
      text: "Продажи",
      url: Cart,
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.jobHeader}>Работа по категориям</h1>
      <div className={styles.cardsContainer}>
        {cardInfo.map((item, ind) => {
          return <CategoryCard key={ind} cardInfo={item} />;
        })}
        <div className={styles.moreCategories}>
          <img src={Arrow} alt="arrow" className={styles.arrowImg} />
          <p className={styles.moreCategoriesText}>Больше категорий</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryCardList;
