import style from "./EventItem.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem({ title, image, date, location, id }) {
  const humanReadebleDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    yeat: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={style.item}>
      <img src={"/" + image} alt={title} />
      <div className={style.content}>
        <div>
          <h2>{title}</h2>
          <div className={style.date}>
            <DateIcon />
            <time>{humanReadebleDate}</time>
          </div>
          <div className={style.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={style.actions}>
          <Button link={exploreLink}>
            {" "}
            <span>Explore Event</span>
            <span className={style.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
