import styles from "./styles.module.css";

function CategoryCard({ cardInfo }) {
  return (
    <div className={styles.cardContainer}>
      <img src={cardInfo.url} alt={cardInfo.text} className={styles.cardImg} />
      <p className={styles.cardInfoText}>{cardInfo.text}</p>
    </div>
  );
}

export default CategoryCard;
