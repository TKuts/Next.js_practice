import Link from "next/link";
import style from "./EventItem.module.css";

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
            <time>{humanReadebleDate}</time>
          </div>
          <div className={style.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={style.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
