import React from "react";

import Experience from "../components/Experience";
//import Proyects from "../components/Proyects";
import LifePhilosophy from "../components/LifePhilosophy";
import Skills from "../components/Skills";
import Card from "../components/Card";
import data from "../assets/data.json";
import styles from "../assets/styles/desktop/desktop.module.scss";

const FrontEnd = () => {
  return (
    <div className={styles.body}>
      <div className={styles["body__left"]}>
        <Experience
          h2={data.frontEnd.experience.title}
          h3={data.frontEnd.experience.position}
          h4={data.frontEnd.experience.company}
          dateStart={data.frontEnd.experience.dateStart}
          dateEnd={data.frontEnd.experience.dateEnd}
          place={data.frontEnd.experience.workPlace}
          description={data.frontEnd.experience.description}
          activities={data.frontEnd.experience.activities}
        />
      </div>

      <div className={styles["body__right"]}>
        <LifePhilosophy
          h2={data.lifePhilosophy.title}
          description={data.lifePhilosophy.description}
        />
        <Skills
          h2={'Idiomas'}
          ratedSkills={data.lenguages.ratedSkills}          
        />
        <Skills
          h2={"Hard Skills"}
          ratedSkills={data.frontEnd.skills.ratedSkills}
          divider={true}
        />
        <Skills
          ratedSkills={data.others.skills.ratedSkills}
          skills={data.frontEnd.skills.unratedSkills}
          divider={true}
        />
        <Skills
          skills={data.others.skills.unratedSkills}
          divider={true}
        />
        <Skills
          skills={data.mechatronics.skills.methodology}
        />
        <Skills
          h2={'Soft Skills'}
          skills={data.softSkills}
        />
        <Card
          h2={'Educacion'}
          h3={data.education.title}
          h4={data.education.institution}
          dateStart={data.education.dateStart}
          dateEnd={data.education.dateEnd}
          description={data.education.description} 
        />
      </div>
    </div>
  );
};

export default FrontEnd;
