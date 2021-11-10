import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ExploreProducts from "./Pages/ExploreProducts/ExplereProducts/ExploreProducts";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";


function App() {
  return (
    <div className="">
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products">
            <ExploreProducts
             />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
