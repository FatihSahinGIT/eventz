import React from "react";

import { useContext } from "react";
import FavContext from "../../context/fav-context";
import EventList from "../../EventList";


const FavoriteEvents = (props) => {
  const favCtx = useContext(FavContext);

  let content;

  if (favCtx.favAmount === 0) {
    content = "No Favorites!";
  } else {
    content = <EventList event={favCtx.fav}/>
  }

  return (
    <div>
      <h1>Fav`s</h1>
      {content}
    </div>
  );
};

export default FavoriteEvents;
