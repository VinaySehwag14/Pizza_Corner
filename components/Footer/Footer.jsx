import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/image/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES , WE DID. THE PIZZA CORNER, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            52A , Chandni Chowk
            <br />
            New Delhi - 110006
            <br /> 885-1039-997
          </p>
          <p className={styles.text}>
            2212 , Cannought Place
            <br />
            New Delhi - 110036
            <br /> 885-1039-998
          </p>
          <p className={styles.text}>
            12A , Saraojni Nagar
            <br />
            New Delhi - 110026
            <br /> 885-1039-999
          </p>
          <p className={styles.text}>
            786 , Kamla Nagar
            <br />
            New Delhi - 110086
            <br /> 885-1039-910
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br />
            9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br />
            12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
