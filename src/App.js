import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import NavigationBar from "./components/Navbar";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<NavigationBar></NavigationBar>
			<div className="App-header">
				<Header></Header>
			</div>

			<div className="About">
				<About></About>
			</div>
			<div className="work">
				<Work></Work>
			</div>
			<div className="contact">
				<Contact></Contact>
			</div>
		</div>
	);
};

export default App;
