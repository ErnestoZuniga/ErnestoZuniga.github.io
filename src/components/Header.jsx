import React from 'react';
import { Link } from 'react-router-dom';

import ContactInfo from './ContactInfo.jsx'
import styles from '../assets/styles/desktop/desktop.module.scss'


const Header = () => {

  return (
    <div className={styles['header']}>

      <div className={styles['header__figure']}>
        <img src={'https://i.imgur.com/GqEBF0g.png'} alt="Ernesto"/>
      </div>

      <div className={styles['header__body']}>

        <h1 className={styles['header__title']}>Luis Ernesto Zu&#241;iga Ontiveros</h1>

        <section className={styles['header__positions']}>
          <Link className={styles['header__link-blue']}to='/'>FrontEnd Developer</Link>
          <Link className={styles['header__link-blue']}to='/Mechatronics'>Mechatronics Engineering</Link>
          <Link className={styles['header__link-blue']}to='/All'>All</Link>
        </section>

        <div className={styles['header__ctt-info']}>
          <ContactInfo tel={'5518137358'} /> 
          <ContactInfo email={'poli.ernesto95@gmail.com'} /> 
          <ContactInfo addres={'Gustavo A. Madero, CDMX'}/> 
          <ContactInfo facebook={'Facebook.com/Kamewalker'}/> 
          <ContactInfo twitter={'@Kamewalker_Tr'}/>
          <ContactInfo github={'github.com/ErnestoZuniga'}/>  
          <ContactInfo linkedin={'linkedin'}/>  
        </div>


        <section className={styles['header__bttns-container']}>
          <button> Eng </button>
          <button> Esp </button>
        </section>


      </div>

    </div>
  );
}

export default Header;
