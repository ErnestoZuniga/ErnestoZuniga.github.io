import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

// import FrontEnd from "../containers/FrontEnd"
// import Mechatronics from "../containers/Mechatronics ";
// import All from "../containers/All";
// import NotFound from "../containers/NotFound"
// import Layout from "../components/Layout";
// import Playground from "../containers/Playground";
import {FrontEndPage, HomePage, MechatronicsPage, Layout} from '../config/resources';



const App = () => {
  return (
    // <Router>
    //   <Layout>
    //     <Switch>
    //       <Route exact={true} path="/" element={<All/>} />
    //       <Route exact={true} path="/frontend" element={<FrontEnd/>}>\
    //         { /*<Route path=':lang' element={<FrontEnd />} />*/}
    //       </Route>
    //       <Route exact={true} path="/mechatronics" element={<Mechatronics/>} />
    //       <Route exact={true} path="*" element={<NotFound/>} />
    //       <Route exact={true} path="/p" element={<Playground/>} />
    //     </Switch>
    //   </Layout>
    // </Router>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" element={<HomePage/>} /> 
          <Route exact path="/FrontEnd" element={<FrontEndPage/>} /> 
          <Route exact path="/Mechatronics" element={<MechatronicsPage/>} /> 
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;