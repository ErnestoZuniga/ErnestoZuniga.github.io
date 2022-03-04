import React from 'react';
import { Link, useSearchParams } from "react-router-dom";
import classNames from 'classnames';

import PersonalInfo from '../../components/PersonalInfo/PersonalInfo';
import styles from '../../assets/styles/styles.module.scss';

const Header = () => {
  const header = styles.header;
  const headerFigure = styles['header__figure'];
  const headerContent = styles['header__content'];
  const headerLinks = styles['header__links'];
  const headerLink = classNames({
    [ styles['link']]: true,
    // [ styles['blue']]: true
   });
   const bttnsContainer = styles['bttns-container']

   const HandleLanButton= (lang) => {
    //saveLSLang(lang)
    // setSearchParams({
    //   lang: lang
    // })
  }

  return(
    <div className={header}>
       <div className={headerFigure}>
          <img 
            src={'https://i.imgur.com/YKpGHEf.png'}  
            alt="Ernesto"
          />
      </div>
      <div className={headerContent}>
        <h1  >Luis Ernesto Zu&#241;iga Ontiveros</h1>
        <section className={headerLinks}>
          <Link 
            className={headerLink}
            to='/frontend'>FrontEnd Developer
          </Link>
          <Link 
            className={headerLink}
            to='/mechatronics'>Mechatronics Engineering
          </Link>
          <Link 
            className={headerLink}
            to='/'>All
          </Link>
        </section>
        <PersonalInfo
          multiple 
          data={{
            email: 'poli.ernesto95@gmail.com',
            tel: '5518137358',
            addres: 'Gustavo A. Madero, CDMX',
            facebook: {
              value: 'Kamewalker',
              url: 'https://www.facebook.com/Kamewalker'
            },
            twitter: {
              value: '@Kamewalker_Tr',
              url: 'https://twitter.com/Kamewalker_Tr'
            },
            github: {
              value: 'ErnestoZuniga',
              url: 'https://github.com/ErnestoZuniga'
            },
            linkedin: {
              value: 'Ernesto Zuniga',
              url: 'https://www.linkedin.com/in/ernestozuniga/'
            }
          }}/>

          <section className={bttnsContainer}>
            <button 
            onClick ={() => {
              HandleLanButton('es-Es')
            }}> Esp </button>
          <button onClick ={ () => {
            HandleLanButton('en-Us')
          }}> Eng </button>
        </section>
      </div>

    </div>
  );
}

export default Header;