import React, {useState, useEffect} from "react";

import { Header, layout } from "../config/resources";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Layout = ({ children }) => {
  const styles = layout.main;
  const body = layout.body;

  const [open,setOpen] = useState(false)

  useEffect(() => {
    handleToggleBackdrop();
  },[]);

  const handleToggleBackdrop = () => {
    setOpen(true);
    setTimeout(() => {
      handleCloseBackdrop()
    }, 750);
  };

  const handleCloseBackdrop = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles}>
        <Header />
        <div className={body}>
          {children}
        </div>
      </div>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={null}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Layout;
