import React from "react";
import "./App.css";
import Movies from "./components/Movies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Actors from "./components/Actors";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/actors' component={Actors} />
					<Route path='/' component={Movies} />
				</Switch>
			</Router>
		</div>
	);
}
export default App;
