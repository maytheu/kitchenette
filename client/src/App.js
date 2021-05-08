import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./component/homepage/Homepage";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
