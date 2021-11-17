import React from 'react';

import * as BtIcons from 'react-icons/bs';
import isElementinObject from '../services/isElementinObject';

//import icons from '../assets/statics/icons'

const ContactInfo = (props) => {
  const estilacho= { 
    main: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  if(Object.keys(props).length !== 1 ){
    return(
      <div style={estilacho.main}> 
        <BtIcons.BsFillXCircleFill /> <p>Error More than one attribute</p> 
      </div>
    );
  }else{
    if(isElementinObject(props, 'email')) {
      return(
        <div style={estilacho.main}> 
          <BtIcons.BsFillEnvelopeFill /> 
          <p>{props.email}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'tel')) {
      return(
        <div style={estilacho.main}> 
        <BtIcons.BsFillTelephoneFill /> <p>{props.tel}</p>
        </div> 
      );
    }
    if(isElementinObject(props, 'addres')) {
      return(
        <div style={estilacho.main}> 
         <BtIcons.BsFillHouseFill /> <p>{props.addres}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'facebook')) {
      return(
        <div style={estilacho.main} onClick={() => openInNewTab('https://www.facebook.com/Kamewalker')}> 
         <BtIcons.BsFacebook /> <p>{props.facebook}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'twitter')) {
      return(
        <div style={estilacho.main} onClick={() => openInNewTab('https://twitter.com/Kamewalker_Tr')}> 
         <BtIcons.BsTwitter /> <p>{props.twitter}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'github')){ 
      return(
        <div style={estilacho.main} onClick={() => openInNewTab('https://github.com/ErnestoZuniga')}> 
         <BtIcons.BsGithub /> <p>{props.github}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'linkedin')) {
      return(
        <div style={estilacho.main}onClick={() => openInNewTab('https://www.linkedin.com/in/ernesto-zuñiga-ontiveros-8b80231b9')}> 
         <BtIcons.BsLinkedin /> <p>{props.linkedin}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'site')) {
      return(
        <div style={estilacho.main}> 
         {/*<IconSite />*/} <p>{props.site}</p> 
        </div> 
      );
    }
  }
}

export default ContactInfo;