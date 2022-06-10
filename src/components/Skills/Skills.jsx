import React from "react";
import classNames from "classnames";

// import styles from "../../assets/styles/styles.module.scss";
// import cardStyles from "../../assets/styles/card.module.scss";
import {styles, card as cardStyles } from "../../config/resources";

import {
  BsCircleFill as CircleFill,
  BsCircleHalf as CircleHalf,
  BsCircle as CircleEmpty,
} from "react-icons/bs";

const Skills = (props) => {
  const iconFormat = styles["icon__format"];
  const ratedSkills = classNames({
    [styles["icon__prepend"]]: true,
    [styles["rskills"]]: true,
  });

  const card = (divider) =>
    classNames({
      [cardStyles["container"]]: true,
      [cardStyles["with-divider"]]: divider,
    });

  const cardh2 = cardStyles["container"];
  const unordered = cardStyles["unordered"];

  const createComponentArray = (n=1, Component) => {
    return new Array(n).fill(undefined).map((e, i) => {
      return <React.Fragment key={"" + e + i}> {Component}</React.Fragment>;
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
        <div className={ratedSkills}>
          <React.Fragment key={i}>
            <p>{object[i].ratedSkills}</p>
            {bolitas(object[i].rate)}
          </React.Fragment>
        </div>
      );
    });
  };

  return (
    <div className={card(props.divider ? true : false)}>
      {props.h2 ? <h2 className={cardh2}> {props.h2} </h2> : <></>}
      {props.data && !props.unordered ? createRatedSkill(props.data) : <></>}
      <div className={unordered}>
        {props.unordered && props.data ? (
          props.data.map((skill, i) => {
            return <p key={"" + skill + i}> {skill} </p>;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Skills;
