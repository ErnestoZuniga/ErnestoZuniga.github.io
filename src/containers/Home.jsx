import React from 'react';
//import '../assets/styles/App.css';

const Home = () => {
  const styles= {
    'main-container':{
      width:'100vw',
      height:'70vh',
      display: 'flex',
      flexWrap:'wrap',
      justifyContent: 'space-around',
      flexGrow: '1'
    }
  }
  return (
    <>
    <div style={styles['main-container']}>
      <h2>Experiencia</h2>
      <h2>Proyectos</h2>
    </div>
    </>
  );
}

export default Home;
