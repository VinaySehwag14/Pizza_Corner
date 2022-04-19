import PizzaCard from "../PizzaCard/PizzaCard";
import styles from "./pizzaList.module.css";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEAST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
        reprehenderit veniam, nostrum consequatur sapiente repellendus quos sit
        laboriosam ea facere perferendis earum nisi cum aspernatur corporis
        dolores, ratione blanditiis quisquam.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
