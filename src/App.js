import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Category from "./Category";
import LandingPage from "./LandingPage";
import BrowserWrapper from "./BrowserWrapper";

const App = () => {
	return (
		<Router>
			<Route exact path="/" component={LandingPage} />
			<Route path="/browse" component={BrowserWrapper} />
			<Route path="/categories/:categoryID" component={Category} />
		</Router>
	);
};

export default App;
