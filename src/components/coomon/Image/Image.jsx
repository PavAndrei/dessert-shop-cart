import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import styles from "./styles.module.css";

export const Image = ({ image, name }) => {
  const { thumbnail, mobile, tablet, desktop } = image;

  const { isSelected } = useContext(DataContext);
  const isSelectedImage = isSelected(name);

  return (
    <div className={styles.wrapper}>
      <picture>
        <source media="(max-width: 480px)" srcSet={mobile} />
        <source media="(max-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 769px)" srcSet={desktop} />
        <img
          src={thumbnail}
          alt={name}
          className={isSelectedImage ? styles.selectedImage : styles.image}
        />
      </picture>
    </div>
  );
};
