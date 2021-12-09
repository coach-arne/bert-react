import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './pages/home.page';

import './App.css';

function App() {
  return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
