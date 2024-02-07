import React from "react";
import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
const RemoteApp = lazy(() => import("./pages/RemoteApp"));
const ChildApp = lazy(() => import("./pages/ChildApp"));

const App = () => {
  return (
    <div>
      <h1>This is the Host!</h1>
      <Suspense
        fallback={
          <>
            <h1>Loading...</h1>
          </>
        }
      >
        <div>
          <Header />
        </div>
        <Switch>
          <Route path="/child-app">
            <ChildApp />
          </Route>
          <Route path="/">
            <RemoteApp />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
