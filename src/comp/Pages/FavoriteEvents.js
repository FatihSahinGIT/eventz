import React from "react";

import { useContext } from "react";
import { Link } from "react-router-dom";
import FavContext from "../../context/fav-context";
import EventList from "../../EventList";

import classes from "../style/FavoriteEvents.module.css";
import classesEv from "../style/EventItem.module.css";

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
    <>
      <div className={classesEv.eventitem}>
        <div className={classes.favcontent}>{content}</div>
      </div>
    </>
  );
};

export default FavoriteEvents;
