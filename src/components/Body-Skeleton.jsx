import React from "react";

// import classNames from "classnames";
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';

import {Skeleton, Typography, Stack} from "@mui/material/";

import { PersonalInfo, styles, card as cardStyles, layout, Card, dataEn } from "../config/resources";
// import { loading, complete } from "../redux/slices/loading";

const BodySkeleton = () => {
  /* STYLES */
  const bodyRight = layout["body__right"];
  const bodyleft = layout["body__left"];
  // const philos = styles["philos"];
  // const container = cardStyles["container"];

  const data = dataEn;

  const ExperienceFrontEnd = () => {
    return (
      <Card
        divider
        data={{
          h2: data.frontEnd.experience.title,
          h3: data.frontEnd.experience.position,
          h4: data.frontEnd.experience.company,
          dateStart: data.frontEnd.experience.dateStart,
          dateEnd: data.frontEnd.experience.dateEnd,
          place: data.frontEnd.experience.workPlace,
          description: data.frontEnd.experience.description,
          activities: data.frontEnd.experience.activities,
        }}
      />
    );
  };

 return(
  <>
    <div className={bodyleft}>
      <Skeleton variant="rectangular" width='100%'>
        <ExperienceFrontEnd />
      </Skeleton>
      <Skeleton variant="rectangular" width='100%'>
        <ExperienceFrontEnd />
      </Skeleton>
    </div>
    <div className={bodyRight}>
      <Skeleton variant="rectangular" width='100%'>
        <ExperienceFrontEnd />
      </Skeleton>
      <Skeleton variant="rectangular" width='100%'>
        <ExperienceFrontEnd />
      </Skeleton>
    </div>
  </>
 );
};

export default BodySkeleton;
