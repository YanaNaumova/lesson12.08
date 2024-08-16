import styles from "./styles.module.css";
function VacancyCard({ cardInfo }) {
  const stylesCircl = {
    backgroundColor: cardInfo.color,
    height: "14px",
    width: "14px",
    borderRadius: "50%",
  };
  return (
    <div className={styles.vacantionCardContainer}>
      <div className={styles.departmentContainer}>
        <div style={stylesCircl}></div>
        <div className={styles.department}>{cardInfo.department}</div>
      </div>
      <h1 className={styles.description}>{cardInfo.description}</h1>
      <div className={styles.location}>
        <img src={cardInfo.img} alt="location" />
        <div className={styles.locationText}>{cardInfo.location}</div>
      </div>
      <div className={styles.logo}>
        <img src={cardInfo.logo} alt={cardInfo.employer} />
        <div className={styles.lastData}>{cardInfo.data}</div>
      </div>
    </div>
  );
}

export default VacancyCard;
