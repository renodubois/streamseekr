import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPageWrapper from "./wrappers/MainPageWrapper";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<div>
			<NavBar />
			<Router>
				<Route path="/" component={MainPageWrapper} />
			</Router>
		</div>
	);
};

export default App;
