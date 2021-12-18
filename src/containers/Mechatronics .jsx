import React from "react";

import Experience from "../components/Experience";
import Proyects from "../components/Proyects";
import LifePhilosophy from "../components/LifePhilosophy";
import Skills from "../components/Skills";
import Card from "../components/Card";
import data from "../assets/data.json";
import styles from "../assets/styles/desktop/desktop.module.scss";

const Mechatronics = () => {
  return (
    <div className={styles.body}>
      <div className={styles["body__left"]}>
        <Experience
          h2={"Experiencia"}
          h3={data.mechatronics.experience.title}
          h4={data.mechatronics.experience.company}
          dateStart={data.mechatronics.experience.dateStart}
          dateEnd={data.mechatronics.experience.dateEnd}
          place={data.mechatronics.experience.workPlace}
          description={data.mechatronics.experience.description}
          activities={data.mechatronics.experience.activities}
        />
        <Proyects
          h2={data.mechatronics.proyects[0].title}
          h3={data.mechatronics.proyects[0].proyect}
          h4={data.mechatronics.proyects[0].institution}
          description={data.mechatronics.proyects[0].description}
          divider={true}
        />
        <Proyects
          h3={data.mechatronics.proyects[1].proyect}
          h4={data.mechatronics.proyects[1].institution}
          description={data.mechatronics.proyects[1].description}
          divider={true}
        />
        <Proyects
          h3={data.mechatronics.proyects[2].proyect}
          h4={data.mechatronics.proyects[2].institution}
          description={data.mechatronics.proyects[2].description}
          divider={true}
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
          h2={data.mechatronics.skills.title}
          ratedSkills={data.mechatronics.skills.ratedSkills}
          skills={data.mechatronics.skills.unratedSkills}
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

export default Mechatronics; 