import React from "react";

import { Header, layout } from "../config/resources";

const Layout = ({ children }) => {
  const styles = layout.main;
  const body = layout.body;

  return (
    <div className={styles}>
      <Header />
      <div className={body}>{children}</div>
    </div>
  );
};

export default Layout;
