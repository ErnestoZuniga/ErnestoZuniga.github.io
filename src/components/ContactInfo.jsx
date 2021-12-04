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
      <div> 
        <BtIcons.BsFillXCircleFill/> <p>Error More than one attribute</p> 
      </div>
    );
  }else{
    if(isElementinObject(props, 'email')) {
      return(
        <div> 
          <BtIcons.BsFillEnvelopeFill/> 
          <p>{props.email}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'tel')) {
      return(
        <div> 
        <BtIcons.BsFillTelephoneFill/> <p>{props.tel}</p>
        </div> 
      );
    }
    if(isElementinObject(props, 'addres')) {
      return(
        <div> 
         <BtIcons.BsFillHouseFill/> <p>{props.addres}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'facebook')) {
      return(
        <div>   
         <BtIcons.BsFacebook/>
         <a target={'_blank, noopener, noreferrer'} href='https://www.facebook.com/Kamewalker' onClick={() => openInNewTab('https://www.facebook.com/Kamewalker')}>{props.facebook}</a>
        </div> 
      );
    }
    if(isElementinObject(props, 'twitter')) {
      return(
        <div> 
         <BtIcons.BsTwitter/>
         <a target={'_blank, noopener, noreferrer'} href='https://twitter.com/Kamewalker_Tr' onClick={() => openInNewTab('https://twitter.com/Kamewalker_Tr')}>{props.twitter}</a> 
        </div> 
      );
    }
    if(isElementinObject(props, 'github')){ 
      return(
        <div> 
         <BtIcons.BsGithub/> 
         <a target={'_blank, noopener, noreferrer'} href='https://github.com/ErnestoZuniga' onClick={() => openInNewTab('https://github.com/ErnestoZuniga')}>{props.github}</a> 
        </div> 
      );
    }
    if(isElementinObject(props, 'linkedin')) {
      return(
        <div> 
         <BtIcons.BsLinkedin/>
         <a target={'_blank, noopener, noreferrer'} href='https://www.linkedin.com/in/ernesto-zuñiga-ontiveros-8b80231b9' onClick={() => openInNewTab('https://www.linkedin.com/in/ernesto-zuñiga-ontiveros-8b80231b9')}>{props.linkedin}</a>
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