import React, { useState, useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./components/home";
// import Login from "./components/login";
import History from "./components/History";
import Navbar from "./components/navbar";
import AboutUs from "./components/Aboutus";
import Help from "./components/Help";
import Contact from "./components/Contact";
import MarkerDetail from "./components/MarkerDetail";
import LoginPage from "./components/Auth/Login";
import SignupPage from "./components/Auth/Signup";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const history = createBrowserHistory();

  useEffect(() => {
    const token_ = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    }
    const userId_ = localStorage.getItem("userId");
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    setIsAuth(true);
    setToken(token_);
    setUserId(userId_);
    setAutoLogout(remainingMilliseconds);
  }, []);

  const logoutHandler = () => {
    setIsAuth(false);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
  };

  const loginHandler = (event, authData) => {
    event.preventDefault();
    setAuthLoading(true);
    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error("Validation failed.");
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log("Error!");
          throw new Error("Could not authenticate you!");
        }
        return res.json();
      })
      .then((resData) => {
        // console.log("resData", resData);
        setToken(resData.token);
        setUserId(resData.userId);
        setIsAuth(true);
        // console.log("after login isAuth: ", isAuth);

        setAuthLoading(false);
        localStorage.setItem("token", resData.token);
        console.log("token saved");
        localStorage.setItem("userId", resData.userId);

        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        setAutoLogout(remainingMilliseconds);
      })
      .catch((err) => {
        console.log(err);
        console.log("couldn't login, tonu");
        setIsAuth(false);
        setAuthLoading(false);
      });
  };

  const signupHandler = (event, authData) => {
    event.preventDefault();
    setAuthLoading(true);
    fetch("http://localhost:8080/auth/signup", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: authData.signupForm.email.value,
        password: authData.signupForm.password.value,
        name: authData.signupForm.name.value,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log("Error!");
          throw new Error("Creating a user failed!");
        }
        return res.json();
      })
      .then((resData) => {
        // console.log(resData);
        setIsAuth(false);
        setAuthLoading(false);
      })
      .then(() => {
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setIsAuth(false);
        setAuthLoading(false);
      });
  };

  const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };

  let routes = (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => (
          <LoginPage {...props} onLogin={loginHandler} loading={authLoading} />
        )}
      />
      <Route
        path="/signup"
        exact
        render={(props) => (
          <SignupPage
            {...props}
            onSignup={signupHandler}
            loading={authLoading}
          />
        )}
      />
    </Switch>
  );

  if (isAuth) {
    routes = (
      <Fragment className="main-container">
        <div className="main-container-navbar">
          <Navbar />
        </div>
        <div className="main-container-body">
          <Switch>
            <Route
              path="/history"
              exact
              render={(props) => (
                <History
                  {...props}
                  mId=""
                  userId={userId}
                  token={token}
                ></History>
              )}
            />
            <Route
              path="/aboutus"
              exact
              render={(props) => (
                <AboutUs {...props} userId={userId} token={token}></AboutUs>
              )}
            />
            <Route
              path="/help"
              exact
              render={(props) => (
                <Help {...props} userId={userId} token={token}></Help>
              )}
            />
            <Route
              path="/contact"
              exact
              render={(props) => (
                <Contact {...props} userId={userId} token={token}></Contact>
              )}
            />
            <Route
              path="/home"
              exact
              render={(props) => (
                <Home {...props} mId="" userId={userId} token={token}></Home>
              )}
            />

            <Route
              path="/:mId"
              exact
              render={(props) => (
                <MarkerDetail
                  {...props}
                  userId={userId}
                  token={token}
                ></MarkerDetail>
              )}
            />
            <Route
              path="/"
              exact
              render={(props) => (
                <Home {...props} mId="" userId={userId} token={token}></Home>
              )}
            />
          </Switch>
        </div>
      </Fragment>
    );
  }

  return <Router>{routes}</Router>;
}

export default App;
