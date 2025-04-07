import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import styles from "./styles.module.css";

import { CartItem } from "../CartItem/CartItem";

export const CartList = () => {
  const { cart } = useContext(DataContext);
  return (
    <ul className={styles.list}>
      {cart
        ? cart.map((cartItem) => {
            return <CartItem key={cartItem.name} cartItem={cartItem} />;
          })
        : null}
    </ul>
  );
};
