import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";

import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import Dashboard from "./components/Dashboard";

import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={LoginPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
