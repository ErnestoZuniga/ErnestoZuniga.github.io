import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { loading as loadingFunc, complete } from "../redux/slices/loading";

import { Header, layout } from "../config/resources";
import HeaderSkeleton from "../components/Header-Skeleton";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Layout = ({ children }) => {
  /* STYLES */
  const styles = layout.main;
  const body = layout.body;
  /* STATE */
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.loading);

  useEffect(() => {
    handleToggleBackdrop();
  },[]);

  const handleToggleBackdrop = () => {
    dispatch(loadingFunc());
    setTimeout(() => {
      handleCloseBackdrop()
    }, 350);
  };

  const handleCloseBackdrop = () => {
    dispatch(complete());
  };

  return (
    <>
      <div className={styles}>
        {loading ? <Header /> : <HeaderSkeleton />}
        <div className={body}>
          {children}
        </div>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!loading}
        onClick={null}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Layout;
