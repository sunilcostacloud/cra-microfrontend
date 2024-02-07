import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import PageA from "./components/PageA";
import PageB from "./components/PageB";

const App = ({ history, props }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/child-app/page-a" render={(props) => <PageA />} />
          <Route exact path="/child-app/page-b" render={(props) => <PageB />} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
