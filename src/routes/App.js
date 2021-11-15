import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import FrontEnd from "../containers/FrontEnd"
import NotFound from "../containers/NotFound"
import Layout from "../components/Layout";



const App = () => {
return (
    <Router>
      <Layout>
        <Switch>
          <Route exact={true} path="/" element={<FrontEnd/>} />
          <Route exact={true} path="*" element={<NotFound/>} />
        </Switch>
      </Layout>
    </Router>
);}

export default App;