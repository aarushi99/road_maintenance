import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import History from "./components/History";
import Navbar from "./components/navbar";
import AboutUs from "./components/Aboutus";
import Help from "./components/Help";
import Contact from "./components/Contact";
import MarkerDetail from "./components/MarkerDetail";

function App() {
  const [user, setUser] = useState(true);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="main-container">
          <div className="main-container-navbar">
            <Navbar />
          </div>
          <div className="main-container-body">
            <Switch>
              <Route
                path="/history"
                component={() => <History mId=""></History>}
              />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/help" component={Help} />
              <Route path="/contact" component={Contact} />
              <Route path="/home" component={Home} />
              <Route path="/:mId" component={MarkerDetail} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
