import { CartTotal } from "../../cart/CartTotal/CartTotal";
import { Title } from "../../coomon/Title/Title";
import { OrderList } from "../OrderList/OrderList";
import { OrderButton } from "../OrderButton/OrderButton";
import { Confirm } from "../../../icons/Confirm";

import styles from "./styles.module.css";

export const OrderConfirmation = () => {
  return (
    <div className={styles.confirmation}>
      <Confirm />

      <Title>Order Confirmed</Title>

      <p className={styles.text}>We hope you enjoy your food!</p>

      <div className={styles.wrapper}>
        <OrderList />
        <CartTotal />
      </div>

      <OrderButton>Start New Order</OrderButton>
    </div>
  );
};
