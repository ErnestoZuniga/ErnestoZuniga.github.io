import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch  } from "react-redux";

import { dataEn, dataEs, Card, Skills, layout, styles } from "../../config/resources";

const FrontEndPage = () => {
  /* REDUX N STATE */
  const [data, setData] = useState(dataEn);
  const { lan } = useSelector(state => state.languages);
  const dispatch = useDispatch();
  /* STYLES */
  const bodyRight = layout["body__right"];
  const bodyleft = layout["body__left"];
  const philos = styles["philos"];

  useEffect(() => {   
    if (lan === 'en-Us') {setData(dataEn)}
    if(lan === 'es-Es')  {setData(dataEs) }
  },[lan])

  const ExperienceFrontEnd = () => {
    return (
      <Card
        data={{
          h2: data.frontEnd.experience.title,
          h3: data.frontEnd.experience.position,
          h4: data.frontEnd.experience.company,
          dateStart: data.frontEnd.experience.dateStart,
          dateEnd: data.frontEnd.experience.dateEnd,
          place: data.frontEnd.experience.workPlace,
          description: data.frontEnd.experience.description,
          activities: data.frontEnd.experience.activities,
        }}
      />
    );
  };

  const LifePhilosophy = () => {
    return (
      <div className={philos}>
        <Card
          h2={data.lifePhilosophy.title}
          description={data.lifePhilosophy.description}
        />
      </div>
    );
  };

  const Formation = () => {
    return (
      <Card
        h2={data.education.title}
        h3={data.education.subtitle}
        h4={data.education.institution}
        dateStart={data.education.dateStart}
        dateEnd={data.education.dateEnd}
        description={data.education.description}
      />
    );
  };

  const Lenguages = () => {
    return (
      <Skills h2={data.lenguages.title} data={data.lenguages.ratedSkills} />
    );
  };

  const HardSkills = () => {
    return (
      <>
        <Skills
          h2={"Hard Skills"}
          data={data.frontEnd.skills.ratedSkills}
          divider
        />
        <Skills data={data.others.skills.ratedSkills} divider />
        <Skills
          unordered
          data={data.frontEnd.skills.unratedSkills}
          divider={true}
        />
        <Skills
          unordered
          data={data.others.skills.unratedSkills}
        />
        <Skills unordered data={data.mechatronics.skills.methodology} />
      </>
    );
  };
  return (
    <>
      <div className={bodyleft}>
        <ExperienceFrontEnd />
      </div>
      <div className={bodyRight}>
        <LifePhilosophy />
        <Formation />
        <Lenguages />
        <HardSkills />
      </div>
    </>
  );
}

export default FrontEndPage;