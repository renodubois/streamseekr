import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MainPageWrapper from "./wrappers/MainPageWrapper";

const App = () => {
	return (
		<Router>
			<Route path="/" component={MainPageWrapper} />
		</Router>
	);
};

export default App;
