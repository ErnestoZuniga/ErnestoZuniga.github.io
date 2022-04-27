import React from "react";

import styles from "../../assets/styles/styles.module.scss";

import {
  BsCircleFill as CircleFill,
  BsCircleHalf as CircleHalf,
  BsCircle as CircleEmpty,
} from "react-icons/bs";

const Skills = (props) => {
  const iconFormat = styles["icon__format"];

  const createComponentArray = (n, Component) => {
    return new Array(n).fill(undefined).map((e, i) => {
      return <React.Fragment key={"" + e + i}> {Component} </React.Fragment>;
    });
  };

  const bolitas = (rate) => {
    const cf = Math.floor(rate);
    const ch = Math.round((rate - Math.floor(rate)).toFixed(1));
    const ce = 5 - (cf + ch);
    const arraycf = createComponentArray(cf, <CircleFill />);
    const arraych = createComponentArray(ch, <CircleHalf />);
    const arrayce = createComponentArray(ce, <CircleEmpty />);
    return (
      <div className={iconFormat}>
        {arraycf.concat(arraych.concat(arrayce))}
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
    <div
      className={props.divider === true 
        ? styles["divider"] 
        : styles["card"]
      }
    >
      {
        props.h2 
        ? <h2 className={styles["card__h2"]}> {props.h2} </h2> 
        : <></>
      }
      {
        props.ratedSkills 
        ? createRatedSkill(props.ratedSkills) 
        : <></>
      }
      <div className={styles["unordered"]}>
        {
          props.skills 
          ? (
            props.skills.map((skill, i) => {
              return <p key={"" + skill + i}> {skill} </p>;
            })
          ) 
          : (<></>)
        }
      </div>
    </div>
  );
};

export default Skills;
