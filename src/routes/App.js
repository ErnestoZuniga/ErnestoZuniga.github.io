import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../containers/Home"
import NotFound from "../containers/NotFound"



const App = () => {
return (
    <Router>
      <Routes>
        <Route exact={true} path="/" element={<Home/>} />
        <Route exact={true} path="*" element={<NotFound/>} />
      </Routes>
    </Router>
);}

export default App;