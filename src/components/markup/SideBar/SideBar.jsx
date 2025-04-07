import styles from "./styles.module.css";

export const SideBar = ({ children }) => {
  return <div className={styles.sidebar}>{children}</div>;
};
