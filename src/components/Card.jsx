import React from "react";

//import styles from "../assets/styles/desktop/desktop.module.scss";
import * as BsIcons from "react-icons/bs";
import isElementinObject from "../services/isElementinObject";

const Card = (props) => {
  return (
    <div /* card */ /*{ props.divider ?  : }*/>
      <h1>{props.h1}</h1>
      <h2> {props.h2} </h2>
      <h3>{props.h3}</h3>
      <h4>{props.h4}</h4>
      <div /*date*/>
        <div /* icon-container*/>
          {isElementinObject(props, "dateStart") || isElementinObject(props, "dateEnd")? (
            <>
              <BsIcons.BsCalendar2Date /* icon__prepend */ />
              <p>
                {props.dateStart} - {props.dateEnd}
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
        <div /* icon-container*/>
          {isElementinObject(props, "place") ? (
            <>
              <BsIcons.BsGeoAltFill /* icon__prepend */ />
              <p>{props.place}</p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <p>{props.description}</p>
      <div /*style lista*/ >  
        <ul>
          { isElementinObject(props, 'activities') ? (
            props.activities.map( (activity) => { return(<li key={activity}>{activity}</li>)}  ) 
          ) : ( 
            <></>
          )}
        </ul>
      </div>
      {props.children}
    </div>
  );
};

export default Card;
