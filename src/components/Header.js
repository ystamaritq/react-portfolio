import React from "react";
import Fade from "react-reveal/Fade";
import logo from "../assets/imgs/logo.png";
import { Container } from "react-bootstrap";

const Header = () => {
	{
		return (
			<Container>
				<h2 className="heading-background">Yadira's Portfolio</h2>
				<Fade bottom>
					<h2 className="header-title">
						Hi, my name is Yadira Tamarit<br></br>
						I'm a Full Stack Developer
						<br></br>
					</h2>
				</Fade>
			</Container>
		);
	}
};

export default Header;
