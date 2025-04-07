import styles from "./styles.module.css";

import { Empty } from "../../../icons/Empty";

export const CartEmpty = () => {
  return (
    <div className={styles.group}>
      <Empty />
      <p className={styles.text}>Your added items will appear here</p>
    </div>
  );
};
