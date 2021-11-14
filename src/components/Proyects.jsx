import React from 'react';

const Proyects = (props) => {
  return(
    <div>
      {props.title === true ? <h2>Proyectos</h2> : <></>}
      <h3>{props.proyect}</h3>
      <h4>{props.institution}</h4>
      <p>{props.description}</p>
    </div>
  )
}

export default Proyects;