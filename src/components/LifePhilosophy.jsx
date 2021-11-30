import React from 'react';

import styles from '../assets/styles/desktop/desktop.module.scss'

const LifePhilosophy = (props) => (
  <div className={styles.philosophycard}>
    <h2 className={styles['philosophycard__title']}>Filosofia de vida</h2>
    <p>{props.description}</p>
  </div>
)

export default LifePhilosophy;