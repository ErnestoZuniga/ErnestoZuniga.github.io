import React from "react";

//import Card from "../components/Card";
import Experience from "../components/Experience";
import styles from '../assets/styles/deskto/desktop.module.scss'

const Playground = () => {
return (
  <>
    <Experience 
    h1={'Luis Ernesto Zuniga'}
    h2={"Experience"}
    h3={'Place'}
    h4={'ache 4'}
    dateStart={'12/12/21'}
    dateEnd={'Ongoing'}
    description={'I love to ride horses and then going to Trebon'}
    place={'yourheart'}
    activities={[1,2,3,4,5,6,7]}
    divider={true}
    >
      <p className={[styles['header__link'], styles['header__ddd']]}>More children for exp2</p>
    </Experience>
  </>
)
}

export default Playground;