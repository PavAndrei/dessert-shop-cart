import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import { formatPrice } from "../../../helpers/formatPrice";

import styles from "./styles.module.css";

export const CartTotal = () => {
  const { calculateOrderSumm } = useContext(DataContext);

  const summ = calculateOrderSumm();

  return (
    <div className={styles.order}>
      <p className={styles.description}>Order Total</p>
      <div className={styles.price}>${formatPrice(summ)}</div>
    </div>
  );
};
