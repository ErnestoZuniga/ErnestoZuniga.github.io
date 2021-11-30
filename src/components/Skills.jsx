import React from "react";

import {
  BsCircleFill as CircleFill,
  BsCircleHalf as CircleHalf,
  BsCircle as CircleEmpty
} from 'react-icons/bs';



const Skills = (props) => {
  
  const createComponentArray = (n, Component) => {
    return (new Array(n).fill(undefined).map( (e,i) => {
      return <React.Fragment> {Component} </React.Fragment>
    }))
  }

  const bolitas = (rate) => {
    const cf = Math.floor(rate);
    const ch = Math.round((rate - Math.floor(rate)).toFixed(1));
    const ce = 5 - (cf + ch);
    const arrcf = createComponentArray(cf, <CircleFill/>);
    const arrch = createComponentArray(ch, <CircleHalf/>);
    const arrce = createComponentArray(ce, <CircleEmpty/>);
    return (
      <div /*className={}*/>
        <p>wololo</p>
        {arrcf.concat(arrch.concat(arrce))}
      </div>
    )
  }

  const createRatedSkill = (object) => {
    return new Array(Object.keys(object).length).fill(undefined).map( (e,i) => {
      return (
      <div>
        <React.Fragment key={i}>
          <p>{object[i].ratedSkills}</p>
          {bolitas(object[i].rate)}
        </React.Fragment>
      </div>
      )
    })
  }

  return(
    <div>
      <h2>{props.title}</h2>
      {createRatedSkill(props.ratedSkills)}
      {props.skills.map( (skill,i) => <p key={skill + i.toString()} > {skill}</p>)} 
    </div>
  )
} 
export default Skills;