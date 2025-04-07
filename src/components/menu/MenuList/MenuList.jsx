import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import { MenuItem } from "../MenuItem/MenuItem";

import styles from "./styles.module.css";

export const MenuList = () => {
  const { desserts } = useContext(DataContext);

  return (
    <ul className={styles.list}>
      {desserts.map((dessert) => {
        return <MenuItem key={dessert.name} dessert={dessert} />;
      })}
    </ul>
  );
};
