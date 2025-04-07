import styles from "./styles.module.css";

import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import { formatPrice } from "../../../helpers/formatPrice";

import { Delete } from "../../../icons/Delete";

export const CartItem = ({ cartItem }) => {
  const { quantity, price, name } = cartItem;

  const { removeItemFromCart } = useContext(DataContext);

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <h4 className={styles.title}>{name}</h4>
        <div className={styles.purchase}>
          <div className={styles.quantity}>{quantity}x</div>
          <div className={styles.price}>
            <span>@</span>
            <span>${formatPrice(price)}</span>
          </div>
          <div className={styles.summ}>${formatPrice(price * quantity)}</div>
        </div>
      </div>
      <button
        onClick={() => removeItemFromCart(name)}
        className={styles.remove}
      >
        <Delete />
      </button>
    </li>
  );
};
