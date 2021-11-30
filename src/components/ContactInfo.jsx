import React from 'react';

import * as BtIcons from 'react-icons/bs';
import isElementinObject from '../services/isElementinObject';
import styles from '../assets/styles/desktop/desktop.module.scss'

const ContactInfo = (props) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  if(Object.keys(props).length !== 1 ){
    return(
      <div   className={styles['contact']}> 
        <BtIcons.BsFillXCircleFill className={styles['contact__icon']}/> <p>Error More than one attribute</p> 
      </div>
    );
  }else{
    if(isElementinObject(props, 'email')) {
      return(
        <div   className={styles['contact']}> 
          <BtIcons.BsFillEnvelopeFill className={styles['contact__icon']}/> 
          <p>{props.email}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'tel')) {
      return(
        <div   className={styles['contact']}> 
        <BtIcons.BsFillTelephoneFill className={styles['contact__icon']}/> <p>{props.tel}</p>
        </div> 
      );
    }
    if(isElementinObject(props, 'addres')) {
      return(
        <div   className={styles['contact']}> 
         <BtIcons.BsFillHouseFill className={styles['contact__icon']}/> <p>{props.addres}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'facebook')) {
      return(
        <div   className={styles['contact']} onClick={() => openInNewTab('https://www.facebook.com/Kamewalker')}> 
         <BtIcons.BsFacebook className={styles['contact__icon']}/> <p>{props.facebook}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'twitter')) {
      return(
        <div   className={styles['contact']} onClick={() => openInNewTab('https://twitter.com/Kamewalker_Tr')}> 
         <BtIcons.BsTwitter className={styles['contact__icon']}/> <p>{props.twitter}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'github')){ 
      return(
        <div   className={styles['contact']} onClick={() => openInNewTab('https://github.com/ErnestoZuniga')}> 
         <BtIcons.BsGithub className={styles['contact__icon']}/> <p>{props.github}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'linkedin')) {
      return(
        <div  className={styles['contact']} onClick={() => openInNewTab('https://www.linkedin.com/in/ernesto-zuñiga-ontiveros-8b80231b9')}> 
         <BtIcons.BsLinkedin className={styles['contact__icon']}/> <p>{props.linkedin}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'site')) {
      return(
        <div className={styles['contact']}> 
         {/*<IconSite />*/} <p>{props.site}</p> 
        </div> 
      );
    }
  }
}

export default ContactInfo;