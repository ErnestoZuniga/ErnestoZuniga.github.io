import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import Home from "../containers/Home"
import NotFound from "../containers/NotFound"
import Layout from "../components/Layout";



const App = () => {
return (
    <Router>
      <Layout>
        <Switch>
          <Route exact={true} path="/" element={<Home/>} />
          <Route exact={true} path="*" element={<NotFound/>} />
        </Switch>
      </Layout>
    </Router>
);}

export default App;