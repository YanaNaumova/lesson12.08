import styles from "./styles.module.css";
import Linkedin from "../../assets/icons/linkedinIcon.svg";
import Twitter from "../../assets/icons/twiterIcon.svg";
import Google from "../../assets/icons/googleIcon.svg";
import Facebook from "../../assets/icons/feFacebookIcon.svg";
import CoolJobLogo from "../../assets/icons/cooljobFooter.svg";

function Footer() {
  const citiesList = [
    { city: "Осака" },
    { city: "Коясан" },
    { city: "Токио" },
    { city: "Хаконэ" },
    { city: "Наэба" },
    { city: "Томаму" },
    { city: "Йокогама" },
    { city: "Нагоя" },
    { city: "Саппоро" },
    { city: "Кобе" },
  ];
  return (
    <div className={styles.footerContainer}>
      <div className={styles.cityContainer}>
        <h1 className={styles.popularCity}>Популярные города</h1>
        <div className={styles.cityListContainer}>
          {citiesList.map((city, ind) => {
            return <p key={ind}>{city.city}</p>;
          })}
        </div>
      </div>
      <div className={styles.footerSozialMedia}>
        <img src={CoolJobLogo} alt="logo" />
        <div className={styles.footerSozialMediaContainer}>
          <a href="https://www.linkedin.com/">
            <img src={Linkedin} alt="linkedin" />
          </a>
          <a href="https:www.google.com">
            <img src={Google} alt="google" />
          </a>
          <a href="https://www.twiter.com">
            <img src={Twitter} alt="twiter" />
          </a>
          <a href="https://www.facebook.com">
            <img src={Facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
