import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch  } from "react-redux";

import { dataEn, dataEs, Card, Skills, layout, styles } from "../../config/resources";
// import { updateLan } from "../../redux/slices/languages";
const HomePage = () => {
  const { lan } = useSelector(state => state.languages);
  const dispatch = useDispatch();
  const bodyRight = layout["body__right"];
  const bodyleft = layout["body__left"];
  const philos = styles["philos"];
  const [data, setData] = useState(dataEn);

  useEffect(() => {   
    if (lan === 'en-Us') {setData(dataEn)}
    if(lan === 'es-Es')  {setData(dataEs) }
  },[lan])

  const ExperienceFrontEnd = () => {
    return (
      <Card
        divider
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

  const ExperienceMechatronics = () => {
    return (
      <Card
        data={{
          h3: data.mechatronics.experience.subtitle,
          h4: data.mechatronics.experience.company,
          dateStart: data.mechatronics.experience.dateStart,
          dateEnd: data.mechatronics.experience.dateEnd,
          place: data.mechatronics.experience.workPlace,
          description: data.mechatronics.experience.description,
          activities: data.mechatronics.experience.activities,
        }}
      />
    );
  };

  const ProjectsMechatronics = () => {
    return (
      <>
        <ArtificialVisonProject />
        <PIDProject />
        <AnimationKinematicProject />
      </>
    );
  };

  const ArtificialVisonProject = () => {
    return (
      <Card
        divider
        data={{
          h2: data.mechatronics.projects[0].title,
          h3: data.mechatronics.projects[0].project,
          h4: data.mechatronics.projects[0].institution,
          description: data.mechatronics.projects[0].description,
        }}
      />
    );
  };

  const PIDProject = () => {
    return (
      <Card
        divider
        data={{
          h3: data.mechatronics.projects[1].project,
          h4: data.mechatronics.projects[1].institution,
          description: data.mechatronics.projects[1].description,
        }}
      />
    );
  };

  const AnimationKinematicProject = () => {
    return (
      <Card
        data={{
          h3: data.mechatronics.projects[2].project,
          h4: data.mechatronics.projects[2].institution,
          description: data.mechatronics.projects[2].description,
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
        <Skills data={data.others.skills.ratedSkills} divider={true} />
        <Skills data={data.mechatronics.skills.ratedSkills} divider={true} />
        <Skills
          unordered
          data={data.frontEnd.skills.unratedSkills}
          divider={true}
        />
        <Skills
          unordered
          data={data.others.skills.unratedSkills}
          divider={true}
        />
        <Skills
          unordered
          data={data.mechatronics.skills.unratedSkills}
          divider={true}
        />
        <Skills unordered data={data.mechatronics.skills.methodology} />
      </>
    );
  };

  return (
    <>
      <div className={bodyleft}>
        <ExperienceFrontEnd />
        <ExperienceMechatronics />
        <ProjectsMechatronics />
      </div>
      <div className={bodyRight}>
        <LifePhilosophy />
        <Formation />
        <Lenguages />
        <HardSkills />
      </div>
    </>
  );
};

export default HomePage;
