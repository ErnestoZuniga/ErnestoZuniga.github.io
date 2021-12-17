import React from "react";

import styles from "../assets/styles/desktop/desktop.module.scss";
import {
  BsCircleFill as CircleFill,
  BsCircleHalf as CircleHalf,
  BsCircle as CircleEmpty,
} from "react-icons/bs";
import Card from "./Card";
import isElementinObject from "../services/isElementinObject";

const Skills = (props) => {
  const createComponentArray = (n, Component) => {
    return new Array(n).fill(undefined).map((e, i) => {
      return <> {Component} </>;
    });
  };

  const bolitas = (rate) => {
    const cf = Math.floor(rate);
    const ch = Math.round((rate - Math.floor(rate)).toFixed(1));
    const ce = 5 - (cf + ch);
    const arrcf = createComponentArray(cf, <CircleFill />);
    const arrch = createComponentArray(ch, <CircleHalf />);
    const arrce = createComponentArray(ce, <CircleEmpty />);
    return (
      <div className={styles["icon__format"]}>
        {arrcf.concat(arrch.concat(arrce))}
      </div>
    );
  };

  const createRatedSkill = (object) => {
    return new Array(Object.keys(object).length).fill(undefined).map((e, i) => {
      return (
        <div className={styles["icon__prepend-rskills"]}>
          <React.Fragment key={i}>
            <p>{object[i].ratedSkills}</p>
            {bolitas(object[i].rate)}
          </React.Fragment>
        </div>
      );
    });
  };

  return (
    <div className={ props.divider === true ? styles['divider'] : styles['card'] }>
      { isElementinObject(props, 'h2') ? <h2 className={styles['card__h2']} > {props.h2} </h2> : <></>}
      { isElementinObject(props, 'ratedSkills') ? createRatedSkill(props.ratedSkills) : <></>}
      <div className={styles["unordered"]}>
        {props.skills.map((skill, i) => (
          <p key={skill + i.toString()}> {skill}</p>
        ))}
      </div>
    </div>
  );
};
export default Skills;
