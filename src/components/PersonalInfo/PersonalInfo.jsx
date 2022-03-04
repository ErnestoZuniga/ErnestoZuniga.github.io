import React from 'react';
import classNames from 'classnames';

import * as bsIcons from 'react-icons/bs';
import infoStyles from '../../assets/styles/personalInfo.module.scss';

const PersonalInfo = (props) => {
  const iconPrepend = classNames({
    [infoStyles['icon__prepend']]: true, 
    // [infoStyles['container__row']]: true
  });
  const iconFormat = infoStyles['icon__format'];
  const link = infoStyles['link'];
  const iconContainer = infoStyles['icon__container'];
  const {email, tel, addres, facebook, twitter, github, linkedin} = (props.data ?  props.data : props);
    
  

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const TemplateInfo = () => {
    return(
      <div className={iconContainer}>
        { tel ?
          <div className={iconPrepend}> 
            <bsIcons.BsFillTelephoneFill className={iconFormat}/> 
            <p>{tel}</p> 
          </div>
          : <></>
        }
        { addres ?
          <div className={iconPrepend}> 
            <bsIcons.BsFillHouseFill className={iconFormat}/> 
            <p>{addres}</p> 
          </div>
          : <></>
        }
        { email ? 
          <div className={iconPrepend}> 
            <bsIcons.BsFillEnvelopeFill className={iconFormat}/> 
            <p>{email}</p> 
          </div>
          : <></>
        }
        { facebook ?
          <div className={iconPrepend}> 
            <bsIcons.BsFacebook className={iconFormat}/> 
            <a 
              className={link} 
              target={'_blank, noopener, noreferrer'} 
              href={facebook.url}
              onClick={() => openInNewTab(facebook.url)}>{facebook.value}
            </a>
          </div>
          : <></>
        }
        { twitter ?
          <div className={iconPrepend}> 
            <bsIcons.BsTwitter className={iconFormat}/> 
            <a 
              className={link} 
              target={'_blank, noopener, noreferrer'} 
              href={twitter.url}
              onClick={() => openInNewTab(twitter.url)}>{twitter.value}
            </a>
          </div>
          : <></>
        }
        { github ?
          <div className={iconPrepend}> 
            <bsIcons.BsGithub className={iconFormat}/> 
            <a 
              className={link} 
              target={'_blank, noopener, noreferrer'} 
              href={github.url}
              onClick={() => openInNewTab(github.url)}>{github.value}
            </a>
          </div>
          : <></>
        }
        { linkedin ?
          <div className={iconPrepend}> 
            <bsIcons.BsLinkedin className={iconFormat}/> 
            <a 
              className={link} 
              target={'_blank, noopener, noreferrer'} 
              href={linkedin.url}
              onClick={() => openInNewTab(linkedin.url)}>{linkedin.value}
            </a>
          </div>
          : <></>
        }
      </div>
    );
  }

  if(props.multiple) {
    return <TemplateInfo/>
  }else{
    if(Object.keys(props).length !== 1) {
      return(
        <div className={iconPrepend}> 
          <bsIcons.BsFillXCircleFill className={iconFormat}/> 
          <p>Error More than one attribute</p> 
        </div>
      )
    }else {
      return <TemplateInfo/>
    }
  }
}

export default PersonalInfo;