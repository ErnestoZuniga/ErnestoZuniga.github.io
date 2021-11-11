import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../containers/Home"
import NotFound from "../containers/NotFound"
import Layout from "../components/Layout";



const App = () => {
return (
    <Router>
      <Layout>
        <Routes>
          <Route exact={true} path="/" element={<Home/>} />
          <Route exact={true} path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </Router>
);}

export default App;