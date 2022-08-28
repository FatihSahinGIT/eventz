import EventItem from "./EventItem";
import classes from "./style/EventItem.module.css";

const EventList = (props) => {
  return (
    <div className={classes.eventitem}>
      {props.event.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            img={event.flyerFront}
            date={event.date}
            address={event.venue.direction}
            start={event.startTime}
            end={event.endTime}
          />
        );
      })}
    </div>
  );
};

export default EventList;
