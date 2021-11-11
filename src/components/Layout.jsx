import React from 'react';

import Header from './Header'
//Import persistent components

const Layout = ({children}) => {
  return (
  <>  
    <Header/>
    {children}
    {/*<SomeOtherCoponents/> */}
  </>
  );
}

export default Layout;
