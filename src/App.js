import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/work";
import Contact from "./components/Contact";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<NavigationBar />
			<div className="App-header">
				<Header />
			</div>
			<div className="About">
				<About />
			</div>
			<div className="Skills">
				<Skills />
			</div>
			<div className="work">
				<Work />
			</div>
			<div className="contact">
				<Contact />
				<Footer />
			</div>
		</div>
	);
};

export default App;
