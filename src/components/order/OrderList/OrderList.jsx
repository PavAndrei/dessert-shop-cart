import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import styles from "./styles.module.css";

import { formatPrice } from "../../../helpers/formatPrice";

export const OrderList = () => {
  const { cart } = useContext(DataContext);

  return (
    <ul className={styles.list}>
      {cart.map((item) => {
        return (
          <li key={item.name} className={styles.item}>
            <div className={styles.content}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <div className={styles.group}>
                <h4 className={styles.subtitle}>{item.name}</h4>
                <div className={styles.info}>
                  <div className={styles.quantity}>{item.quantity}x</div>
                  <div className={styles.price}>@ {item.price}$</div>
                </div>
              </div>
            </div>
            <div className={styles.summ}>
              ${formatPrice(item.price * item.quantity)}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
