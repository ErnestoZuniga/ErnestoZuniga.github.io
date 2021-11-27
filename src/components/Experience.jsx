import React from 'react';

import * as BsIcons from 'react-icons/bs';
import styles from '../assets/styles/styles.module.scss';

const Experience = (props) => {
  return(
    <div className={styles.expcard}>

      {props.title === true ? <h2 className={styles['expcard__title']}>Experiencia</h2> : <></>}

      <h3 className={styles['expcard__position']}>{props.position}</h3>

      <h4 className={styles['expcard__company']}>{props.company}</h4>

      <section className={styles['date']}>
        <div className={styles['date__append']}>
          <BsIcons.BsCalendar2Date className={styles['date__icon']}/>
          <p>{props.dateStart} - {props.dateEnd}</p>
        </div>
        <div className={styles['date__append']}>
          <BsIcons.BsGeoAltFill className={styles['date__icon']}/> 
          <p>{props.workPlace}</p>
        </div>
      </section>

      <section /*description*/ >
        <p>{props.description}</p>
      </section>

      <div /*style lista*/ >
        <ul>
          {props.activities.map( 
            (activity) => <li key={activity}>{activity}</li>
            )}
        </ul>
      </div>

    </div>
  )
}

export default Experience;