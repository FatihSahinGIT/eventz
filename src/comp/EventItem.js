import classes from "./style/EventItem.module.css";

import { useContext } from "react";
import FavContext from "../context/fav-context";

const EventItem = (props) => {
  const favCtx = useContext(FavContext);

  const addFavBtn = () => {
    console.log(props.img);
    favCtx.addFav({
      id: props.id,
      title: props.title,
      img: props.img,
      date: props.date,
    });
  };

  return (
    <div className={classes.eventitem}>
      <div key={props.id} className={classes.eventcontainer}>
        <img src={props.img} alt={props.title}></img>

        <p>Date: {props.date}</p>
        <h1>{props.title}</h1>
        <button onClick={addFavBtn}>Favorite</button>
      </div>
    </div>
  );
};

export default EventItem;
