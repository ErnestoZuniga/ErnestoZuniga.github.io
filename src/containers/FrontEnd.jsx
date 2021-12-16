import React from "react";

import Experience from "../components/Experience";
import Proyects from "../components/Proyects";
import LifePhilosophy from "../components/LifePhilosophy";
import Skills from "../components/Skills";
import data from "../assets/data.json";
import styles from "../assets/styles/desktop/desktop.module.scss";

const Home = () => {
  return (
    <div className={styles.body}>
      <div className={styles["body__left"]}>
        <Experience
          h2={data.experience.title}
          h3={data.experience.position}
          h4={data.experience.company}
          dateStart={data.experience.dateStart}
          dateEnd={data.experience.dateEnd}
          place={data.experience.workPlace}
          description={data.experience.description}
          activities={data.experience.activities}
          /*divider={true}*/
        />
        <Proyects
          h2={data.proyects.title}
          h3={data.proyects.proyect}
          h4={data.proyects.institution}
          description={data.proyects.description}
          /*divider={true}*/
        />
      </div>

      <div className={styles["body__right"]}>
        <LifePhilosophy
          h2={data.lifePhilosophy.title}
          description={data.lifePhilosophy.description}
        />
        <Skills
          h2={"Hardskills"}
          rate={1}
          ratedSkills={data.skills.ratedSkills}
          skills={data.skills.unratedSkills}
        />
      </div>
    </div>
  );
};

export default Home;
