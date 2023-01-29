import HeaderImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Eat Up</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderImage} />
      </div>
    </Fragment>
  );
}

export default Header;
