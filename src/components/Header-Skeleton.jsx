import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

// import classNames from "classnames";
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';

import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import { PersonalInfo, styles } from "../config/resources";
// import { loading, complete } from "../redux/slices/loading";

const HeaderSkeleton = () => {
  const dataPersonalInfo = {
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
  };
  /* STYLES */
  const header = styles.header;
  const headerFigure = styles["header__figure"];
  const headerContent = styles["header__content"];
  /* REDUX N STATE*/
  // const dispatch = useDispatch();

  return (
    <>
      <div className={header}>
        <div className={headerFigure}>
          <Skeleton variant="circular">
            <div className={headerFigure}>
              <img src={"https://i.imgur.com/YKpGHEf.png"} alt="Ernesto" />
            </div>
          </Skeleton>
        </div>
        <div className={headerContent}>
          <Skeleton variant="text" >
            <Typography variant="h1">
              Luis Ernesto Zu&#241;iga Ontiveros
            </Typography>
          </Skeleton>
          <Skeleton variant="text" width="70%" height='20%'>
            <PersonalInfo multiple data={dataPersonalInfo} />
          </Skeleton>
          <div className="something">
            <Skeleton variant="text">
              <Typography>Luis Ernesto Zu&#241;iga Ontiveros</Typography>
            </Skeleton>
            <Skeleton variant="text">
              <Typography>Luis Ernesto Zu&#241;iga Ontiveros</Typography>
            </Skeleton>
            <Skeleton variant="text">
              <Typography>Luis Ernesto Zu&#241;iga Ontiveros</Typography>
            </Skeleton>
            <Skeleton variant="text">
              <Typography>Luis Ernesto Zu&#241;iga Ontiveros</Typography>
            </Skeleton>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSkeleton;
