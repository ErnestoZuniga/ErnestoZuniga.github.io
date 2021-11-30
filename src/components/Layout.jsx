import React from 'react';

import Header from './Header'
//Import persistent components
import styles from '../assets/styles/desktop/desktop.module.scss'

const Layout = ({children}) => {
  return (
  <div className={styles.main}>  
    <Header/>
    {children}
    {/*<SomeOtherCoponents/> */}
  </div>
  );
}

export default Layout;
