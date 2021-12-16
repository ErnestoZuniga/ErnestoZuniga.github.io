import React from 'react';

import * as BtIcons from 'react-icons/bs';
import isElementinObject from '../services/isElementinObject';
import styles from '../assets/styles/deskto/desktop.module.scss'

const ContactInfo = (props) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  if(Object.keys(props).length !== 1 ){
    return(
      <div className={styles['icon__prepend']}> 
        <BtIcons.BsFillXCircleFill className={styles['icon__format']}/> <p>Error More than one attribute</p> 
      </div>
    );
  }else{
    if(isElementinObject(props, 'email')) {
      return(
        <div className={styles['icon__prepend']}> 
          <BtIcons.BsFillEnvelopeFill className={styles['icon__format']} /> 
          <p>{props.email}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'tel')) {
      return(
        <div className={styles['icon__prepend']}> 
        <BtIcons.BsFillTelephoneFill className={styles['icon__format']} /> <p>{props.tel}</p>
        </div> 
      );
    }
    if(isElementinObject(props, 'addres')) {
      return(
        <div className={styles['icon__prepend']}> 
         <BtIcons.BsFillHouseFill className={styles['icon__format']} /> <p>{props.addres}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'facebook')) {
      return(
        <div className={styles['icon__prepend']}>   
         <BtIcons.BsFacebook className={styles['icon__format']} />
         <a className={styles['header__link']} target={'_blank, noopener, noreferrer'} href='https://www.facebook.com/Kamewalker' onClick={() => openInNewTab('https://www.facebook.com/Kamewalker')}>{props.facebook}</a>
        </div> 
      );
    }
    if(isElementinObject(props, 'twitter')) {
      return(
        <div className={styles['icon__prepend']}> 
         <BtIcons.BsTwitter className={styles['icon__format']} />
         <a className={styles['header__link']} target={'_blank, noopener, noreferrer'} href='https://twitter.com/Kamewalker_Tr' onClick={() => openInNewTab('https://twitter.com/Kamewalker_Tr')}>{props.twitter}</a> 
        </div> 
      );
    }
    if(isElementinObject(props, 'github')){ 
      return(
        <div className={styles['icon__prepend']}> 
         <BtIcons.BsGithub className={styles['icon__format']} /> 
         <a className={styles['header__link']} target={'_blank, noopener, noreferrer'} href='https://github.com/ErnestoZuniga' onClick={() => openInNewTab('https://github.com/ErnestoZuniga')}>{props.github}</a> 
        </div> 
      );
    }
    if(isElementinObject(props, 'linkedin')) {
      return(
        <div className={styles['icon__prepend']}> 
         <BtIcons.BsLinkedin className={styles['icon__format']} />
         <a className={styles['header__link']} target={'_blank, noopener, noreferrer'} href='https://www.linkedin.com/in/ernesto-zuñiga-ontiveros-8b80231b9' onClick={() => openInNewTab('https://www.linkedin.com/in/ernesto-zuñiga-ontiveros-8b80231b9')}>{props.linkedin}</a>
        </div> 
      );
    }
  }
}

export default ContactInfo;