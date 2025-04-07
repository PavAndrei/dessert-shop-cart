import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import styles from "./styles.module.css";

export const OrderButton = ({ children }) => {
  const { clearCart } = useContext(DataContext);

  return (
    <button onClick={clearCart} className={styles.btn}>
      {children}
    </button>
  );
};
