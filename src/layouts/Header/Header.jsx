import React, {useState, useEffect} from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import classNames from "classnames";
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';

import { PersonalInfo, styles } from "../../config/resources";
import { updateLan } from "../../redux/slices/languages";
import { loading as loadingFunc, complete } from "../../redux/slices/loading";

const Header = () => {
  const dataPersonalInfo= {
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
  }
  /* STYLES */
  const header = styles.header;
  const headerFigure = styles["header__figure"];
  const headerContent = styles["header__content"];
  const headerLinks = styles["header__links"];
  const headerLink = styles["link"];
  const bttnsContainer = styles["bttns-container"];
  /* REDUX N STATE*/
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  // const { loading } = useSelector(state => state.loading);

  const handleToggleBackdrop = async () => {
    // setOpen(true);
    dispatch(loadingFunc()); 
    setTimeout(() => {
      handleCloseBackdrop()
    }, 750);
  }

  const handleCloseBackdrop = () => {
    // setOpen(false);
    dispatch(complete());
  }
  
  const HandleLanButton = async (lang) => {
    //saveLSLang(lang)
    // setSearchParams({
    //   lang: lang
    // })
    // console.log(lang);
    handleToggleBackdrop();
    setTimeout( () => {
      dispatch(updateLan(lang));
    },250);
  };

  return (
    <>
      <div className={header}>
        <div className={headerFigure}>
          <img src={"https://i.imgur.com/YKpGHEf.png"} alt="Ernesto" />
        </div>
        <div className={headerContent}>
          <h1>Luis Ernesto Zu&#241;iga Ontiveros</h1>
          <div className={headerLinks}>
            <Link onClick={() => {handleToggleBackdrop()}} className={headerLink} to="/FrontEnd">
              FrontEnd Dev
            </Link>
            <Link onClick={() => {handleToggleBackdrop()}} className={headerLink} to="/Mechatronics">
              Mechatronics Engineering
            </Link>
            <Link onClick={() => {handleToggleBackdrop()}} className={headerLink} to="/">
              All
            </Link>
          </div>
          <PersonalInfo
            multiple
            data={dataPersonalInfo}
          />
          <div className={bttnsContainer}>
            <button
              onClick={() => { HandleLanButton("es-Es") }}
            >Esp</button>
            <button
              onClick={() => { HandleLanButton("en-Us") }}
            >Eng</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
