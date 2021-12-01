import React from 'react';

import Experience from '../components/Experience';
import Proyects from '../components/Proyects';
import LifePhilosophy from '../components/LifePhilosophy';
import Skills from '../components/Skills';
import styles from '../assets/styles/styles.module.scss'
import data from '../assets/data.json'

const Home = () => {

  return (   
  <div className={styles.body}>
    <div className={styles['body__left']}>
    <Experience
      title={data.experience.title}
      position={data.experience.position}
      company={data.experience.company}
      dateStart={data.experience.dateStart}
      dateEnd={data.experience.dateEnd}
      workPlace={data.experience.workPlace}
      description={data.experience.description}
      activities={data.experience.activities }
    />
    <Proyects 
      title={data.proyects.title}
      proyect={data.proyects.proyect}
      institution={data.proyects.institution}
      description={data.proyects.description}
    />
    </div>

    <div className={styles['body__right']}>
    <LifePhilosophy 
    title={data.lifePhilosophy.title}
    description={data.lifePhilosophy.description}/>
    <Skills 
      title={'Hardskills'} 
      rate={1}
      ratedSkills={data.skills.ratedSkills}
      skills={data.skills.unratedSkills}
    />
    </div>
  </div>
  );
}

export default Home;
