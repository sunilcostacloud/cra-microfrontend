import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Page1 from "./components/Page1";
import PageNotFound from "./components/PageNotFound";
import Page2 from "./components/Page2";

const App = ({ history, props }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/page-1" render={(props) => <Page1 />} />
          <Route exact path="/page-2" render={(props) => <Page2 />} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
