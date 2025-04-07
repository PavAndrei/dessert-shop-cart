import styles from "./styles.module.css";

import { Image } from "../../coomon/Image/Image";
import { MenuButton } from "../MenuButton/MenuButton";

import { formatPrice } from "../../../helpers/formatPrice";

export const MenuItem = ({ dessert }) => {
  const { image, name, category, price } = dessert;

  return (
    <li className={styles.item}>
      <div className={styles.cart}>
        <Image image={image} name={name} />

        <MenuButton name={name} price={price} image={image.thumbnail} />
      </div>

      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.price}>${formatPrice(price)}</div>
      </div>
    </li>
  );
};
