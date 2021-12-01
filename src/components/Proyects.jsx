import React from 'react';

import styles from '../assets/styles/desktop/desktop.module.scss'

const Proyects = (props) => {
  return(
    <div className={styles.prycard}>
      <h2 className={styles['prycard__title']}>Proyectos</h2>
      <h3 className={styles['prycard__pry']}>{props.proyect}</h3>
      <h4 className={styles['prycard__inst']}>{props.institution}</h4>
      <p>{props.description}</p>
    </div>
  )
}

export default Proyects;