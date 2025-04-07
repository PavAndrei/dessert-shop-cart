import styles from "./styles.module.css";

import { Container } from "../Container/Container";

export const Layout = ({ children }) => {
  return (
    <Container>
      <div className={styles.layout}>{children}</div>
    </Container>
  );
};
