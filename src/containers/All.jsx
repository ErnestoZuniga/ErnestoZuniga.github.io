import React, { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Experience from "../components/Experience";
import Proyects from "../components/Proyects";
import LifePhilosophy from "../components/LifePhilosophy";
import Skills from "../components/Skills";
import Card from "../components/Card";
import dataEn from "../assets/dataEn.json";
import dataEs from "../assets/dataEs.json";
import styles from "../assets/styles/desktop/desktop.module.scss";

const All = () => {
  //const [localStorageLan,saveLocalStorageLan] = useLocalStorage('LANG',navigator.language)
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(dataEn);

  useEffect(() => {
    const lan = searchParams.get("lan");
    const regexEs = new RegExp(/^es\b/, "i");
    if (regexEs.test(lan)) {
      setData(dataEs);
    } else {
      setData(dataEn);
    }
  }, [searchParams]);


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
          divider={true}
        />
        <Experience
          h3={data.mechatronics.experience.subtitle}
          h4={data.mechatronics.experience.company}
          dateStart={data.mechatronics.experience.dateStart}
          dateEnd={data.mechatronics.experience.dateEnd}
          place={data.mechatronics.experience.workPlace}
          description={data.mechatronics.experience.description}
          activities={data.mechatronics.experience.activities}
        />
        <Proyects
          h2={data.mechatronics.projects[0].title}
          h3={data.mechatronics.projects[0].project}
          h4={data.mechatronics.projects[0].institution}
          description={data.mechatronics.projects[0].description}
          divider={true}
        />
        <Proyects
          h3={data.mechatronics.projects[1].project}
          h4={data.mechatronics.projects[1].institution}
          description={data.mechatronics.projects[1].description}
          divider={true}
        />
        <Proyects
          h3={data.mechatronics.projects[2].project}
          h4={data.mechatronics.projects[2].institution}
          description={data.mechatronics.projects[2].description}
          //divider={true}
        />
      </div>

      <div className={styles["body__right"]}>
        <LifePhilosophy
          h2={data.lifePhilosophy.title}
          description={data.lifePhilosophy.description}
        />
        <Skills
          h2={data.lenguages.title}
          ratedSkills={data.lenguages.ratedSkills}          
        />
        <Skills
          h2={"Hard Skills"}
          ratedSkills={data.frontEnd.skills.ratedSkills}
          divider={true}
        />
        <Skills
          ratedSkills={data.others.skills.ratedSkills}
          divider={true}
        />

        <Skills
        ratedSkills={data.mechatronics.skills.ratedSkills}
        divider={true}
        />

        <Skills
          skills={data.frontEnd.skills.unratedSkills}
          divider={true}
        />

        <Skills
          skills={data.others.skills.unratedSkills}
          divider={true}
        />

        <Skills
          skills={data.mechatronics.skills.unratedSkills}
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
          h2={data.education.title}
          h3={data.education.subtitle}
          h4={data.education.institution}
          dateStart={data.education.dateStart}
          dateEnd={data.education.dateEnd}
          description={data.education.description} 
        />
      </div>
    </div>
  );
};

export default All;