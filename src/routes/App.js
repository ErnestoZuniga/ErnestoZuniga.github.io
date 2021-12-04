import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import FrontEnd from "../containers/FrontEnd"
import NotFound from "../containers/NotFound"
import Layout from "../components/Layout";
import Playground from "../containers/Playground";



const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact={true} path="/" element={<FrontEnd/>} />
          <Route exact={true} path="*" element={<NotFound/>} />
          <Route exact={true} path="/p" element={<Playground/>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;