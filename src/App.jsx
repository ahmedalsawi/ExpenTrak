import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";

import LoginPage from "./components/pages/LoginPage";

import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={LoginPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
