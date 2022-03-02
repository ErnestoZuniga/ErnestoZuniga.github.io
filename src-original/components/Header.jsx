import React from 'react';
import { Link, useSearchParams } from "react-router-dom";


import ContactInfo from './ContactInfo.jsx'
import styles from '../assets/styles/desktop/desktop.module.scss'
import useLocalStorage from '../services/customHooks/useLocalStorage'


const Header = () => {
  //const [lSLang,saveLSLang] = useLocalStorage('LANG',navigator.language)
  const [searchParams, setSearchParams] = useSearchParams();

  const HandleLanButton= (lang) => {
    //saveLSLang(lang)
    setSearchParams({
      lang: lang
    })
  }

  return (
    <div className={styles['header']}>

      <div className={styles['header__figure']}>
        <img src={'https://i.imgur.com/YKpGHEf.png'} alt="Ernesto"/>
      </div>

      <div className={styles['header__body']}>

        <h1 className={styles['header__title']}>Luis Ernesto Zu&#241;iga Ontiveros</h1>

        <section className={styles['header__positions']}>
          <Link className={styles['header__link-blue']}to='/frontend'>FrontEnd Developer</Link>
          <Link className={styles['header__link-blue']}to='/mechatronics'>Mechatronics Engineering</Link>
          <Link className={styles['header__link-blue']}to='/'>All</Link>
        </section>

        <div className={styles['header__ctt-info']}>
          <ContactInfo tel={'5518137358'} /> 
          <ContactInfo email={'poli.ernesto95@gmail.com'} /> 
          <ContactInfo addres={'Gustavo A. Madero, CDMX'}/> 
          <ContactInfo facebook={'Kamewalker'}/> 
          <ContactInfo twitter={'@Kamewalker_Tr'}/>
          <ContactInfo github={'ErnestoZuniga'}/>  
          <ContactInfo linkedin={'Linkedin'}/>  
        </div>


        <section className={styles['header__bttns-container']}>
          <button onClick ={ () => {
            HandleLanButton('es-Es')
          }
          }> Esp </button>
          <button onClick ={ () => {
            HandleLanButton('en-Us')
          }
          }> Eng </button>
        </section>


      </div>

    </div>
  );
}

export default Header;
