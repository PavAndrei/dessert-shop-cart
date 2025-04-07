import { Notify } from "../../../icons/Notify";

import styles from "./styles.module.css";

export const CartNotify = () => {
  return (
    <div className={styles.notification}>
      <Notify />
      <p className={styles.text}>
        This is a <span className={styles.accent}>carbon-neutral</span> delivery
      </p>
    </div>
  );
};
