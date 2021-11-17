import React from "react";

import isElementinObject from "../services/isElementinObject";
import {
  BsCircleFill as CircleFill,
  BsCircleHalf as CircleHalf,
  BsCircle as CircleEmpty
} from 'react-icons/bs';


const Skills = (props) => {
  
  const cf = Math.floor(props.rate);
  const ch = Math.round((props.rate - Math.floor(props.rate)).toFixed(1));
  const ce = 5 - (cf + ch)
  const arraycf = new Array(cf).fill(undefined).map((element,i) => <CircleFill key={'cf' + i.toString() }/>)
  const arraych = new Array(ch).fill(undefined).map((element,i) => <CircleHalf key={'ch'+ i.toString()}/>)
  const arrayce = new Array(ce).fill(undefined).map((element,i) => <CircleEmpty key={'ce'+ i.toString()}/>)
  const arrayc= arraycf.concat(arraych.concat(arrayce))
  console.log('wololo')

  console.log('Data: ',JSON.stringify(props.ratedSkills) )
  console.log('keys: ' ,Object.keys(props.ratedSkills));
  console.log('entries: ',Object.entries(props.ratedSkills))
  console.log('values: ',Object.values(props.ratedSkills))
  
  new Array(Object.keys(props.ratedSkills).length)

  return(
    <div>
      <h2>{props.title}</h2>
      <p>{props.skill}</p> 
      {/*arrayc*/} {/*Each element of this array should have an unique key*/}
    </div>
  )
} 
export default Skills;