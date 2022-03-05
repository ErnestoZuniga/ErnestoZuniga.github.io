import React from "react";
import classNames from "classnames";
import * as BsIcons from "react-icons/bs";

import card from "../../assets/styles/card.module.scss";

const Card = (props) => {
  const cardContainer = classNames({
    [card["container"]]: true,
    [card["with-divider"]]: props.divider,
  });
  const prepend = card["icon__prepend"];
  const iconFormat = card["icon__format"];
  const { h1, h2, h3, h4, dateStart, dateEnd, place, description, activities } =
    props.data;

  const Titles = () => {
    return (
      <>
        {h1 ? <h1>{h1}</h1> : <></>}
        {h2 ? <h2>{h2}</h2> : <></>}
        {h3 ? <h3>{h3}</h3> : <></>}
        {h4 ? <h4>{h4}</h4> : <></>}
      </>
    );
  };

  const Date = () => {
    return (
      <>
        {dateStart || dateEnd ? (
          <div className={prepend}>
            <BsIcons.BsCalendar2Date className={iconFormat} />
            <p>
              {dateStart} - {dateEnd}
            </p>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  const Place = () => {
    return (
      <>
        {place ? (
          <div className={prepend}>
            <BsIcons.BsGeoAltFill className={iconFormat} />
            <p>{place}</p>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  const Description = () => {
    return <>{description ? <p>{description}</p> : <></>}</>;
  };

  const Activities = () => {
    return(
      <div /*style lista*/>
      <ul>
        {activities ? (
          activities.map((activity,index) => {
            return <li key={activity+index}>{activity}</li>;
          })
        ) : (
          <></>
        )}
      </ul>
    </div>
    );
  };

  return (
    <div className={cardContainer}>
      <Titles />
      <div className={prepend}>
        <Date />
        <Place />
      </div>
      <Description />
      <Activities/>
    </div>
  );
};

export default Card;
