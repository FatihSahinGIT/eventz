import classes from "./style/EventItem.module.css";

import { useContext } from "react";
import FavContext from "../context/fav-context";

import Moment from "moment";

const EventItem = (props) => {
  const favCtx = useContext(FavContext);

  const eventFavCheck = favCtx.checkFav(props.id);

  const formattedDate = Moment(props.date).format("DD.MM.YYYY");
  const formattedStart = Moment(props.start).format("HH:SS");
  const formattedEnd = Moment(props.end).format("HH:SS");

  const addFavBtn = () => {
    if (eventFavCheck) {
      favCtx.removeFav(props.id);
    } else {
      favCtx.addFav({
        id: props.id,
        title: props.title,
        img: props.img,
        date: props.date,
      });
    }
  };

  return (
    <div className={classes.eventitem}>
      <div key={props.id} className={classes.eventcontainer}>
        <img src={props.img} alt={props.title}></img>

        <h2>Date {formattedDate}</h2>
        <h3>
          Start {formattedStart} <br /> End {formattedEnd}
        </h3>
        <h1>{props.title}</h1>
        <h4>
          <a href={props.address} target="_blank" rel="noreferrer">
            Venue Address
          </a>
        </h4>
        <button onClick={addFavBtn}>
          {eventFavCheck ? "Remove from Favorites" : "Favorite"}
        </button>
      </div>
    </div>
  );
};

export default EventItem;
