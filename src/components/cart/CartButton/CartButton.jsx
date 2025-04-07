import styles from "./styles.module.css";

import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import { OrderConfirmation } from "../../order/OrderConfirmation/OrderConfirmation";

export const CartButton = () => {
  const { openModal } = useContext(DataContext);

  return (
    <button
      className={styles.btn}
      onClick={() => openModal(<OrderConfirmation />)}
    >
      Confirm order
    </button>
  );
};
