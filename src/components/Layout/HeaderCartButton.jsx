import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";

function HeaderCartButton(props) {
  const [btnIsValid, setBtnIsValid] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numerOfItemsInCart = items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsValid ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsValid(true);

    const timer = setTimeout(() => {
      setBtnIsValid(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numerOfItemsInCart}</span>
    </button>
  );
}

export default HeaderCartButton;
