import EventItem from "./comp/EventItem";

const EventList = (props) => {
  console.log(props.event);
  return (
    <div>
      {props.event.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            img={event.img}
            date={event.date}
          />
        );
      })}
    </div>
  );
};

export default EventList;
