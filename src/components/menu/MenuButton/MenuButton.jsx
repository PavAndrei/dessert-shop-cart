import styles from "./styles.module.css";

import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import { Inc } from "../../../icons/Inc";
import { Dec } from "../../../icons/Dec";
import { Cart } from "../../../icons/Cart";

export const MenuButton = ({ name, price, image }) => {
  const { addItemToCart, decItem, isSelected } = useContext(DataContext);

  const orderedItem = isSelected(name);
  const quantity = orderedItem?.quantity;

  if (orderedItem) {
    return (
      <div className={styles.selectedBtn}>
        <button
          className={styles.buttonDec}
          onClick={() => decItem({ name, price })}
        >
          <Dec />
        </button>
        <div>{quantity}</div>
        <button
          className={styles.buttonInc}
          onClick={() => addItemToCart({ name, price, image })}
        >
          <Inc />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => addItemToCart({ name, price, image })}
      className={styles.btn}
    >
      <Cart />
      <p>Add to Cart</p>
    </button>
  );
};
