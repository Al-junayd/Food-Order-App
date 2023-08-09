import { useContext } from "react";
import Input from "../UI/Input/Input";
import styles from "./MealsItem.module.css";
import { mealsContext } from "../../App";


const MealsItem = () => {
  const meals = useContext(mealsContext);
  return (
    <>
      {meals.map((meal) => (
        <li className={styles.meal} key={meal.id}>
          <div>
            <h3>{meal.name}</h3>
            <div className={styles.description}>{meal.description}</div>
            <div className={styles.price}>${meal.price}</div>
          </div>
          <div>
            <Input id={meal.id} meal={meal}/>
          </div>
        </li>
      ))}
    </>
  );
};

export default MealsItem;
 