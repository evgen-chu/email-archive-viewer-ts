import BrowsePage from "./BrowsePage";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Email from "./Email";
import GlobalStyles from "./GlobalStyles";
type AppProps = { message: string };

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <BrowsePage />
        </Route>
        <Route exact path="/emails/:emailId">
          <Email />
        </Route>
      </Router>
    </React.Fragment>
  );
};

export default App;
