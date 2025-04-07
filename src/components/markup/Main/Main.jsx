import styles from "./styles.module.css";

export const Main = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};
