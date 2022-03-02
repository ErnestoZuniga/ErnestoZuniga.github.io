import React from 'react';

import styles from '../assets/styles/desktop/desktop.module.scss'
//import Card from './Card';

const LifePhilosophy = (props) => (
  <div className={styles.philosophycard}>
    <h2 className={styles['card__h2']}> {props.h2}</h2>
    <p className={styles['card__philos']}>{props.description}</p>
  </div>
)

export default LifePhilosophy;