import React from 'react';

import * as BsIcons from 'react-icons/bs';

const Experience = (props) => {
  return(
    <div>
      {props.title === true ? <h2>Experiencia</h2> : <></>}
      <h3>{props.position}</h3>
      <h4>{props.company}</h4>
      <section>
        <div>
          <BsIcons.BsCalendar2Date/>
          <p>{props.dateStart} - {props.dateEnd}</p>
        </div>
        <div>
          <BsIcons.BsGeoAltFill/> 
          <p>{props.workPlace}</p>
        </div>
      </section>
      <section /*description*/ >
        <p>{props.description}</p>
      </section>
      <div /*style lista*/ >
        <ul>
          {props.activities.map( (activity) => <li>{activity}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Experience;