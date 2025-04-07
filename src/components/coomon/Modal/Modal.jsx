import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import styles from "./styles.module.css";

export const Modal = () => {
  const { isOpen, modalContent, closeModal, isClosing } =
    useContext(DataContext);

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`${styles.overlay} ${
        isClosing ? styles.fadeOut : styles.fadeIn
      }`}
      // className={styles.overlay}
      onClick={closeModal}
    >
      <div
        className={`${styles.modal} ${
          isClosing ? styles.slideOut : styles.slideIn
        }`}
        // className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {modalContent}
      </div>
    </div>
  );
};
