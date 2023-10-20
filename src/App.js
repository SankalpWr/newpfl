// filename -App.js

import React from "react";
import "./App.css";
import HeroSec from "./HeroSec.js";
import {
	BrowserRouter as Router
} from "react-router-dom";


function App() {
	return (
		<Router>
			<HeroSec/>
		</Router>
	);
}

export default App;

