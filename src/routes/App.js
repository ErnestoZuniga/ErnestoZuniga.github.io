import React from "react";

import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";


import {FrontEndPage, HomePage, MechatronicsPage, Layout} from '../config/resources';
import store from '../redux/store/store';



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
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" element={<HomePage/>} /> 
            <Route exact path="/FrontEnd" element={<FrontEndPage/>} /> 
            <Route exact path="/Mechatronics" element={<MechatronicsPage/>} /> 
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;