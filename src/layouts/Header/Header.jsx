import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import classNames from "classnames";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


import { PersonalInfo, styles } from "../../config/resources";

const Header = () => {
  const [open, setOpen] =  React.useState(false);
  const header = styles.header;
  const headerFigure = styles["header__figure"];
  const headerContent = styles["header__content"];
  const headerLinks = styles["header__links"];
  const headerLink = classNames({
    [styles["link"]]: true,
    // [ styles['blue']]: true
  });
  const bttnsContainer = styles["bttns-container"];

  const handleToggleBackdrop = () => {
    setOpen(true);
    setTimeout(() => {
      handleCloseBackdrop()
    }, 750);
  }

  const handleCloseBackdrop = () => {
    setOpen(false);
  }
  
  const HandleLanButton = (lang) => {
    //saveLSLang(lang)
    // setSearchParams({
    //   lang: lang
    // })
    console.log(lang);
  };

  return (
    <>
      <div className={header}>
        <div className={headerFigure}>
          <img src={"https://i.imgur.com/YKpGHEf.png"} alt="Ernesto" />
        </div>
        <div className={headerContent}>
          <h1>Luis Ernesto Zu&#241;iga Ontiveros</h1>
          <section className={headerLinks}>
            <Link
              onClick={() => {handleToggleBackdrop()}} 
              className={headerLink} 
              to="/FrontEnd">FrontEnd Developer
            </Link>
            <Link
              onClick={() => {handleToggleBackdrop()}} 
              className={headerLink} 
              to="/Mechatronics">Mechatronics Engineering
            </Link>
            <Link
              onClick={() => {handleToggleBackdrop()}} 
              className={headerLink} 
              to="/">All
            </Link>
          </section>
          <PersonalInfo
            multiple
            data={{
              email: "poli.ernesto95@gmail.com",
              tel: "5518137358",
              addres: "Gustavo A. Madero, CDMX",
              facebook: {
                value: "Kamewalker",
                url: "https://www.facebook.com/Kamewalker",
              },
              twitter: {
                value: "@Kamewalker_Tr",
                url: "https://twitter.com/Kamewalker_Tr",
              },
              github: {
                value: "ErnestoZuniga",
                url: "https://github.com/ErnestoZuniga",
              },
              linkedin: {
                value: "Ernesto Zuniga",
                url: "https://www.linkedin.com/in/ernestozuniga/",
              },
            }}
          />

          <section className={bttnsContainer}>
            <button
              onClick={() => { HandleLanButton("es-Es") }}
            > Esp
            </button>
            <button
              onClick={() => { HandleLanButton("en-Us") }}
            > Eng
            </button>
          </section>
        </div>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={null}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Header;
