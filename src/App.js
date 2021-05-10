import BrowsePage from "./BrowsePage";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Email from "./Email";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <BrowsePage />
        </Route>
        <Route exact path="/emails/:emailId">
          <Email />
        </Route>
      </Router>
    </div>
  );
}

export default App;
