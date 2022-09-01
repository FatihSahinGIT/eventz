import React, { useEffect } from "react";

import classes from "../style/AllEvents.module.css";

import { useState } from "react";

import EventList from "../EventList";
import Spinner from "../UI/Spinner";

const AllEvents = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://tlv-events-app.herokuapp.com/events/uk/london", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const eventArray = [];

        for (const key in data) {
          const event = {
            id: key,
            ...data[key],
          };

          eventArray.push(event);
        }
        setEvent(eventArray);
        setLoading(false);
      });
  }, []);

  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    const input = event.target.value;

    setSearch(input);
  };

  let content = event.filter((eventData) => {
    if (search === null) {
      return eventData;
    } else if (eventData.title.toLowerCase().includes(search.toLowerCase())) {
      return eventData;
    }
    return null;
  });

  return (
    <div className={classes.maincontainer}>
      <input
        type="text"
        placeholder="search event"
        className={classes.navsearchbar}
        onChange={searchHandler}
      />
      {loading && <Spinner />}
      {!loading && <EventList event={content} />}
    </div>
  );
};

export default AllEvents;
