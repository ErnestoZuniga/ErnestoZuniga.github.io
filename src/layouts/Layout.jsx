import React from 'react';

import Header from './Header/Header';
import layout from '../assets/styles/layout.module.scss'

const Layout = ({children}) => {
  const styles = layout.main;
  const body = layout.body;

  return (
  <div className={styles}>  
    <Header/>
    <div className={body}>
      {children}
    </div>
  </div>
  );
}

export default Layout;