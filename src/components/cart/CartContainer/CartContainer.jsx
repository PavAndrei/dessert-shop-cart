import styles from "./styles.module.css";

import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import { CartTitle } from "../CartTitle/CartTitle";
import { CartEmpty } from "../CartEmpty/CartEmpty";
import { CartNotify } from "../CartNotify/CartNotify";
import { CartTotal } from "../CartTotal/CartTotal";
import { CartList } from "../CartList/CartList";
import { CartButton } from "../CartButton/CartButton";

export const CartContainer = () => {
  const { calculateOrderSumm } = useContext(DataContext);

  const summ = calculateOrderSumm();

  return (
    <div className={styles.cart}>
      <CartTitle />

      {summ === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <CartList />
          <CartTotal />
          <CartNotify />
          <CartButton />
        </>
      )}
    </div>
  );
};
