import React from "react";

import Card from "./Card";

const Experience2 = (props) => {
  return (
    <Card  {...props}>
      {props.children}
    </Card>
  )
}

export default Experience2;