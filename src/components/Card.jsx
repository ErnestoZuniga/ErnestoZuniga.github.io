import React from "react";

import styles from "../assets/styles/desktop/desktop.module.scss";
import * as BsIcons from "react-icons/bs";
import isElementinObject from "../services/isElementinObject";

const Card = (props) => {
  return (
    <div className={ props.divider === true ? styles['divider'] : styles['card'] }>
      <h1>{props.h1}</h1>
      { isElementinObject(props, 'h2') ? <h2 className={styles['card__h2']} > {props.h2} </h2> : <></>}
      <h3 className={styles['card__h3']} >{props.h3}</h3>
      <h4 className={styles['card__h4']} >{props.h4}</h4>
      <div className={styles['icon__prepend']}>
        <div className={styles['icon__prepend']}>
          {isElementinObject(props, "dateStart") || isElementinObject(props, "dateEnd")? (
            <div className={styles['icon__prepend']}>
              <BsIcons.BsCalendar2Date className={styles['icon__format']} />
              <p>
                {props.dateStart} - {props.dateEnd}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={styles['icon__prepend']}>
          {isElementinObject(props, "place") ? (
            <div className={styles['icon__prepend']}>
              <BsIcons.BsGeoAltFill className={styles['icon__format']} />
              <p>{props.place}</p>
            </div>
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
