import React, { Fragment } from "react";
import BottomBar from "./BottomBar";
import classes from "./Card.module.css";
import NavigationBar from "./NavigationBar";

const Card: React.FC = (props) => {
  return (
    <Fragment>
      {/* <NavigationBar /> */}
      <div className={classes.card}>{props.children}</div>
      {/* <BottomBar /> */}
    </Fragment>
  );
};

export default Card;
