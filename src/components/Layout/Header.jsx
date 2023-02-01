import HeaderImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          EAT & <span style={{ color: "brown" }}>GO</span>{" "}
        </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderImage} />
      </div>
    </Fragment>
  );
}

export default Header;
