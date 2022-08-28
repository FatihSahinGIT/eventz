import React from "react";

import { useContext } from "react";
import { Link } from "react-router-dom";
import FavContext from "../../context/fav-context";
import EventList from "../../EventList";

import classes from "../style/FavoriteEvents.module.css";

const FavoriteEvents = (props) => {
  const favCtx = useContext(FavContext);

  let content;

  if (favCtx.favAmount === 0) {
    content = (
      <p className={classes.nofav}>
        No Favorites! Click <Link to="/">here</Link> to add some!{" "}
      </p>
    );
  } else {
    content = <EventList event={favCtx.fav} />;
  }

  return (
    <div className={classes.favmain}>
      <h1 className={classes.header}>Your Favorites</h1>
      <div className={classes.favcontent}>{content}</div>
    </div>
  );
};

export default FavoriteEvents;
