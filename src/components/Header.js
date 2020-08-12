import React from "react";
import Fade from "react-reveal/Fade";
import logo from "../assets/imgs/logo.png";

const Header = () => {
	{
		return (
			<div>
				<h2 className="heading-background">Yadira's Portfolio</h2>
				<header>
					<h1>
						<Fade bottom cascade>
							<img src={logo} style={{ width: "13em" }} />
						</Fade>
					</h1>
				</header>
				<Fade bottom>
					<h2 className="header-title">
						Hi, my name is Yadira Tamarit<br></br>
						I'm a Full Stack Developer
						<br></br>
					</h2>
				</Fade>
			</div>
		);
	}
};

export default Header;
