import React from "react";

import Card from "../components/Card";
import Experience2 from "../components/Experience2";

const Playground = () => {
return (
  <>
    <Experience2 
    h1={'Jelou'}
    h2={"Did it work?"}
    dateStart={'12/12/21'}
    dateEnd={'Ongoing'}
    description={'I love to ride horses and then going to Trebon'}
    place={'yourheart'}
    activities={[1,2,3,4,5,6,7]}
    >
      <p>More children for exp2</p>
    </Experience2>
  </>
)
}

export default Playground;