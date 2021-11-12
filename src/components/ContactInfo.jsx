import React from 'react';
import * as BtIcons from 'react-icons/bs';

//import icons from '../assets/statics/icons'

const ContactInfo = (props) => {
  const estilacho= { 
    main: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }

  const isElementinObject = (object, element) => (
    Object.keys(object).find(item => item === element) === element ?  true : false
  )

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
          <p onClick={() => console.log('gatitos')}>{props.email}</p> 
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
        <div style={estilacho.main}> 
         <BtIcons.BsFacebook /> <p>{props.facebook}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'twitter')) {
      return(
        <div style={estilacho.main}> 
         <BtIcons.BsTwitter /> <p>{props.twitter}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'github')){ 
      return(
        <div style={estilacho.main}> 
         <BtIcons.BsGithub /> <p>{props.github}</p> 
        </div> 
      );
    }
    if(isElementinObject(props, 'linkedin')) {
      return(
        <div style={estilacho.main}> 
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