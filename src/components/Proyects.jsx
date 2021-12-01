import React from 'react';

import styles from '../assets/styles/styles.module.scss';

const Proyects = (props) => {
  return(
    <div className={styles.prycard}>
      <h2 className={styles['prycard__title']}>Proyectos</h2>
      <h3 className={styles['prycard__pry']}>{props.proyect}</h3>
      <h4>{props.institution}</h4>
      <p>{props.description}</p>
    </div>
  )
}

export default Proyects;