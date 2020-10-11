import React, { useRef, useEffect, Suspense } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

import Login from "./Screens/authentication/Login/Login";
import Signup from "./Screens/authentication/Signup/Signup";
import Dash from "./Screens/Dasboard/Dash";

import AddCourse from "./Screens/AddCourse/AddCourse";
import UserList from './Components1/UserList/UserList';
import ResponsiveDrawer from "./Components1/SideBar/SideBar";
import { BrowserRouter, Route } from "react-router-dom";
import Course from "./Components1/SideBarC/SideBarC";
import Users from "./Screens/Users/Users";
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {



  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/login" component={Login} />
          <AppRoute exact path="/signup" component={Signup} />
          <Route
            path="/dashboard"
            render={(props) => <Dash page={<ResponsiveDrawer />} />}
          />
          <AppRoute exact path="/addcourse" component={AddCourse} />
          <AppRoute exact path="/course" component={Course} />
          <AppRoute exact path="/allusers" component={UserList} />
          <Route path="/users" render={(props) => <Users />} />
        </Switch>
      )} />

  );
  return
}

export default App;