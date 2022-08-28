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

  return (
    <div className={classes.maincontainer}>
      {loading && <Spinner />}
      {!loading && <EventList event={event} />}
    </div>
  );
};

export default AllEvents;
