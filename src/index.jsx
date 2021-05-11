import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DataLayer from "./context"

ReactDOM.render(
	<React.StrictMode>
		<DataLayer>
		<App />
		</DataLayer>
	
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
