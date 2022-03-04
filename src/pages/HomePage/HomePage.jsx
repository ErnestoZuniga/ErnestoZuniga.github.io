import React, { useState,useEffect } from "react";
import classnames from 'classnames';

import stl from './styles.module.scss';
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo.jsx';
import Header from "../../layouts/Header/Header";

const HomePage = () => {
  const pclass = classnames({
   [ stl['with-border']]: true
  //  [ stl['with-bg']]: true
  })

  return (
    <div className={stl.container}>
      {/* <p className={pclass}>Hello Banana: {pclass}</p> */}
      
      <Header/>
    </div>
  );
} 

export default HomePage;