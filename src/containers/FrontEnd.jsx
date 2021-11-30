import React from 'react';

import Experience from '../components/Experience';
import Proyects from '../components/Proyects';
import LifePhilosophy from '../components/LifePhilosophy';
import Skills from '../components/Skills';
import styles from '../assets/styles/desktop/desktop.module.scss'

const Home = () => {
  const description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere magna a quam posuere tempus. Donec nulla ex, venenatis quis ultrices a, varius sit amet felis. Nulla ultricies, magna eu feugiat malesuada, justo nisi fermentum massa, a porttitor sem tortor quis velit. Nulla non mauris suscipit, tempus nisl sed, varius nulla. In fermentum blandit tempor. Aliquam in nulla sed enim tincidunt volutpat. Sed et massa dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eu quam neque. Nulla non risus lacus. Suspendisse dolor leo, vulputate sit amet mauris a, interdum commodo felis. Donec tempus quam sit amet ligula condimentum, at dictum eros efficitur.'

  return (   
  <div className={styles.body}>
    <div className={styles['body__left']}>
    <Experience
      title={true}
      position={'FrontEnd Developer'}
      company={'Krydex'}
      dateStart={'Marzo 2021'}
      dateEnd={'Julio 2021'}
      workPlace={'CDMX Remoto'}
      description={description}
      activities={['Actividad1','Actividad2','Actividad3','Actividad4']}
    />
    <Proyects 
      title={true}
      proyect={'Quantum Mechatronics of rotational motors'}
      institution={'N.A.S.A'}
      description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere magna a quam posuere tempus. Donec nulla ex, venenatis quis ultrices a, varius sit amet felis. Nulla ultricies, magna eu feugiat malesuada, justo nisi fermentum massa, a porttitor sem tortor quis velit. Nulla non mauris suscipit, tempus nisl sed, varius nulla.'}
    />
    </div>

    <div className={styles['body__right']}>
    <LifePhilosophy description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
    <Skills 
      title={'Hardskills'} 
      rate={1}
      ratedSkills={
        [{'ratedSkills': 'Javascript', 'rate': 3},{'ratedSkills': 'Python', 'rate': 2.5}]
      }
      skills={['skill 1', 'skill 2', 'skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 2', 'skill 3','skill 3', 'skill 4', '...', 'Skill n']}
    />
    </div>
  </div>
  );
}

export default Home;
