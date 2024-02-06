import React from "react";
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));

const App = () => {
  return (
    <div>
      <h1>This is host app</h1>
      <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
        <h1>This is the Host!</h1>
        <h2>Remote App:</h2>

        <RemoteApp />

        <h2>Remote Button:</h2>

        <RemoteButton />

        <br />
        <a href="http://localhost:4000">Link to Remote App</a>
      </div>
    </div>
  );
};

export default App;
