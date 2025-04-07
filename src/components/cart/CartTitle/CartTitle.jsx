import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import styles from "./styles.module.css";

export const CartTitle = () => {
  const { countCartItems } = useContext(DataContext);

  const counter = countCartItems();

  return <h2 className={styles.title}>Your Cart {`(${counter})`}</h2>;
};
