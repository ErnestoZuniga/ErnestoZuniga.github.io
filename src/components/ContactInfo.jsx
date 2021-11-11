import React from 'react';

//import icons from '../assets/statics/icons'

const ContactInfo = (props) => {

  const isElementinObject = (object, element) => (
    Object.keys(object).find(item => item === element) === element ?  true : false
  )

  if(Object.keys(props).length !== 1){
    return(
      <> {/*<IconError />*/} <p>Error</p> </>
    );
  }else{
    if(isElementinObject(props, 'email')) {
      return(
        <> {/*<IconEmail />*/} <p>{props.email}</p> </> 
      );
    }
    if(isElementinObject(props, 'tel')) {
      return(
        <> {/*<IconTel />*/} <p>{props.tel}</p> </> 
      );
    }
    if(isElementinObject(props, 'addres')) {
      return(
        <> {/*<IconAddres />*/} <p>{props.addres}</p> </> 
      );
    }
    if(isElementinObject(props, 'facebook')) {
      return(
        <> {/*<IconFB />*/} <p>{props.facebook}</p> </> 
      );
    }
    if(isElementinObject(props, 'twitter')) {
      return(
        <> {/*<IconTw />*/} <p>{props.twitter}</p> </> 
      );
    }
    if(isElementinObject(props, 'linkedin')) {
      return(
        <> {/*<IconLinkedin />*/} <p>{props.linkedin}</p> </> 
      );
    }
    if(isElementinObject(props, 'site')) {
      return(
        <> {/*<IconSite />*/} <p>{props.site}</p> </> 
      );
    }
  }
}

export default ContactInfo;