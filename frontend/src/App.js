import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Login from "./Screens/authentication/Login/Login";
import Signup from "./Screens/authentication/Signup/Signup";
import Dash from "./Screens/Dasboard/Dash";
import ResponsiveDrawer from "./Components/SideBar/SideBar";
import Course from "./Components/SideBarC/SideBarC";
import AddComp from "./Components/AddComp/AddComp";
import "./App.css";

function App() {
	let routes = (
		<BrowserRouter>
			<Switch>
				<Route path="/login" render={(props) => <Login />} />
				<Route path="/signup" render={(props) => <Signup />} />
				<Route
					path="/dashboard"
					render={(props) => <Dash page={<ResponsiveDrawer />} />}
				/>
				<Route path="/course" render={(props) => <Course />} />
				<Route path="/add" render={(props) => <AddComp />} />
			</Switch>
		</BrowserRouter>
	);
	return <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>;
}

export default App;
