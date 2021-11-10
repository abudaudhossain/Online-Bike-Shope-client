import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ExploreProducts from "./Pages/ExploreProducts/ExplereProducts/ExploreProducts";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import Purchases from "./Pages/Purchases/Purchases/Purchases";



function App() {
  return (
    <AuthProvider className="">
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
          <PrivateRoute path="/purchases/:id">
            <Purchases
             />
          </PrivateRoute>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
