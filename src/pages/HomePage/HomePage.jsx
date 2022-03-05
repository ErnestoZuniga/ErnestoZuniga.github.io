import React, { useState, useEffect } from "react";
import classnames from "classnames";

import stl from "./styles.module.scss";
import Header from "../../layouts/Header/Header";
import Card from "../../components/Card/Card";

import dataEn from "../../assets/dummies/dataEn.json";
import dataEs from "../../assets/dummies/dataEs.json";

const HomePage = () => {
  const data = dataEn;
  const pclass = classnames({
    [stl["with-border"]]: true,
    //  [ stl['with-bg']]: true
  });
  const ExperienceFrontEnd = () => {
    return (
      <Card
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
        divider
      />
    );
  };

  return (
    <div className={stl.container}>
      {/* <p className={pclass}>Hello Banana: {pclass}</p> */}
      <Header />
      <ExperienceFrontEnd />
    </div>
  );
};

export default HomePage;
