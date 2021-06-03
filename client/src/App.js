import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import page1 from "./components/page1";
import page2 from "./components/page2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        
      <Route path="/" exact component={page1}  />
      <Route path="/page_2" exact component={page2}  />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
