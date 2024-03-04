import EventItem from "./EventItem";
import style from "./EventList.module.css";

function EventList(props) {
  const { items } = props;

  return (
    <ul className={style.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
          id={event.id}
        />
      ))}
    </ul>
  );
}

export default EventList;
